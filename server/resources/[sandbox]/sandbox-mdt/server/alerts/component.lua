_alertsPermMap = {
	[1] = "police_alerts",
	[2] = "ems_alerts",
	[3] = "tow_alerts",
	[4] = "doc_alerts",
}

_alertValidTypes = {
	police = {
		"car",
		"motorcycle",
		"air1",
	},
	ems = {
		"bus",
		"car",
		"lifeflight",
	},
	tow = {
		"truck-tow",
	},
	prison = {
		"car",
	},
}

_alertTypeNames = {
	car = "Ground",
	motorcycle = "Motorcycle",
	air1 = "Air",
	bus = "Ambo",
	lifeflight = "Life Flight",
}

_alertsDefaultType = {
	police = _alertValidTypes.police[1],
	ems = _alertValidTypes.ems[1],
	tow = _alertValidTypes.tow[1],
	prison = _alertValidTypes.prison[1],
}

AddEventHandler("EmergencyAlerts:Shared:DependencyUpdate", RetrieveEAComponents)
function RetrieveEAComponents()
	Fetch = exports["sandbox-base"]:FetchComponent("Fetch")
	Database = exports["sandbox-base"]:FetchComponent("Database")
	Callbacks = exports["sandbox-base"]:FetchComponent("Callbacks")
	Logger = exports["sandbox-base"]:FetchComponent("Logger")
	Utils = exports["sandbox-base"]:FetchComponent("Utils")
	Chat = exports["sandbox-base"]:FetchComponent("Chat")
	Middleware = exports["sandbox-base"]:FetchComponent("Middleware")
	EmergencyAlerts = exports["sandbox-base"]:FetchComponent("EmergencyAlerts")
	Chat = exports["sandbox-base"]:FetchComponent("Chat")
end

AddEventHandler("Core:Shared:Ready", function()
	exports["sandbox-base"]:RequestDependencies("MDT", {
		"Fetch",
		"Database",
		"Callbacks",
		"Logger",
		"Utils",
		"Chat",
		"Middleware",
		"EmergencyAlerts",
		"Chat",
	}, function(error)
		if #error > 0 then
			return
		end
		RetrieveEAComponents()
		RegisterEACallbacks()
		StartAETrackingThreads()
	end)
end)

AddEventHandler("Proxy:Shared:RegisterReady", function()
	exports["sandbox-base"]:RegisterComponent("EmergencyAlerts", _pdAlerts)
end)

emergencyAlertsData = {}
emergencyAlertsUnits = {}

_pdAlerts = {
	Create = function(self, code, title, type, location, description, isPanic, blip, styleOverride, isArea, camera)
		for k, v in pairs(emergencyAlertsData) do
			if v.AlertPermissions[_alertsPermMap[type]] then
				TriggerClientEvent(
					"EmergencyAlerts:Client:Add",
					v.Source,
					code,
					title,
					type,
					location,
					description,
					isPanic,
					blip,
					styleOverride,
					isArea or false,
					camera or false
				)
			end
		end
	end,
	Units = {
		ChangeType = function(self, primary, newType)
			for k, v in ipairs(emergencyAlertsUnits) do
				if v.primary == primary then
					if _alertValidTypes[v.job] and Utils:DoesTableHaveValue(_alertValidTypes[v.job], newType) then
						emergencyAlertsUnits[k].type = newType
						EmergencyAlerts:SendUnitUpdates()
						return true
					else
						return false
					end
				end
			end
			return false
		end,
		ToggleAvailability = function(self, primary)
			for k, v in ipairs(emergencyAlertsUnits) do
				if v.primary == primary then
					emergencyAlertsUnits[k].available = not emergencyAlertsUnits[k].available
					EmergencyAlerts:SendUnitUpdates()
					return true, emergencyAlertsUnits[k].available
				end
			end
			return false, nil
		end,
		BreakOff = function(self, primary, unit, skipAddingBack) -- Removes the Unit from the Primary
			for k, v in ipairs(emergencyAlertsUnits) do
				if v.primary == primary or not primary then
					for uKey, u in ipairs(v.units) do
						if u == unit then
							table.remove(v.units, uKey)
							if not skipAddingBack then
								local char = Fetch:CharacterData("Callsign", unit)
								if char then
									table.insert(emergencyAlertsUnits, {
										job = v.job,
										type = _alertsDefaultType[v.job],
										available = true,
										character = {
											SID = char:GetData("SID"),
											First = char:GetData("First"),
											Last = char:GetData("Last"),
											Phone = char:GetData("Phone"),
										},
										pursuitMode = "N/A",
										primary = unit,
										units = {},
									})

									EmergencyAlerts:SendUnitUpdates()
								end
							end
							return true
						end
					end
					break
				end
			end
			return false
		end,
		OperateUnder = function(self, primary, unit)
			for k, v in ipairs(emergencyAlertsUnits) do
				if v.primary == unit then
					-- The unit that is moving has to not be a unit with people in
					if #v.units <= 0 then
						for k2, v2 in ipairs(emergencyAlertsUnits) do
							if v2.primary == primary and v.job == v2.job then
								table.insert(v2.units, unit)
								table.remove(emergencyAlertsUnits, k)
								EmergencyAlerts:SendUnitUpdates()
								return true
							end
						end
					end
					break
				end
			end
			return false
		end,
	},
	OnDuty = function(self, dutyData, source, stateId, callsign)
		if
			dutyData
			and (dutyData.Id == "police" or dutyData.Id == "ems" or dutyData.Id == "tow" or dutyData.Id == "prison")
		then
			local alertPermissions = {}
			local allJobPermissions = Jobs.Permissions:GetPermissionsFromJob(source, dutyData.Id)
			for k, v in pairs(_alertsPermMap) do
				if allJobPermissions[v] then
					alertPermissions[v] = true
				end
			end

			local char = Fetch:CharacterSource(source)
			emergencyAlertsData[source] = {
				SID = stateId,
				Source = source,
				Job = dutyData.Id,
				Workplace = dutyData.WorkplaceId,
				Callsign = callsign,
				Phone = char:GetData("Phone"),
				AlertPermissions = alertPermissions,
				First = dutyData.First,
				Last = dutyData.Last,
				Coords = GetEntityCoords(GetPlayerPed(source)),
			}

			EmergencyAlerts:SendMemberUpdates()

			if callsign or dutyData.Id == "tow" then
				table.insert(emergencyAlertsUnits, {
					job = dutyData.Id,
					type = _alertsDefaultType[dutyData.Id],
					available = true,
					character = {
						SID = char:GetData("SID"),
						First = char:GetData("First"),
						Last = char:GetData("Last"),
						Phone = char:GetData("Phone"),
					},
					pursuitMode = "N/A",
					primary = callsign or "NA",
					units = {},
				})

				EmergencyAlerts:SendUnitUpdates()
			end

			if Player(source).state.trackerDisabled then
				Player(source).state.trackerDisabled = false
			end

			if dutyData.Id == "police" or dutyData.Id == "prison" then
				Chat.Send.Services:Dispatch411(
					string.format(
						"[%s] %s. %s is 10-41",
						char:GetData("Callsign"),
						char:GetData("First"):sub(1, 1),
						char:GetData("Last")
					)
				)
			end
		end
	end,
	OffDuty = function(self, dutyData, source, stateId)
		local emergencyMember = emergencyAlertsData[source]
		if emergencyMember then
			EmergencyAlerts.Units:BreakOff(false, emergencyMember.Callsign, true)
			for i = #emergencyAlertsUnits, 1, -1 do
				if emergencyAlertsUnits[i].character.SID == emergencyMember.SID then
					for uKey, u in ipairs(emergencyAlertsUnits[i].units) do
						if u ~= nil and u ~= "NA" then
							local char = Fetch:CharacterData("Callsign", u)

							if char ~= nil then
								table.insert(emergencyAlertsUnits, {
									job = emergencyAlertsUnits[i].job,
									type = _alertsDefaultType[emergencyAlertsUnits[i].job],
									available = true,
									character = {
										SID = char:GetData("SID"),
										First = char:GetData("First"),
										Last = char:GetData("Last"),
										Phone = char:GetData("Phone"),
									},
									pursuitMode = Player(char:GetData("Source")).state.pursuitmode or "N/A",
									primary = u,
									units = {},
								})
							end
						end
					end

					table.remove(emergencyAlertsUnits, i)
				end
			end

			local c = Fetch:CharacterSource(source)
			if c and dutyData and dutyData.Id == "police" or dutyData.Id == "prison" then
				Chat.Send.Services:Dispatch411(
					string.format(
						"[%s] %s. %s is 10-42",
						c:GetData("Callsign"),
						c:GetData("First"):sub(1, 1),
						c:GetData("Last")
					)
				)
			end

			emergencyAlertsData[source] = nil

			EmergencyAlerts:SendUnitUpdates()
			EmergencyAlerts:SendMemberUpdates()
		end
	end,
	DisableTracker = function(self, source, state)
		local emergencyMember = emergencyAlertsData[source]
		if emergencyMember and emergencyMember.Job == "police" and emergencyMember.TrackerDisabled ~= state then
			emergencyAlertsData[source].TrackerDisabled = state

			EmergencyAlerts:SendOnDutyEvent("EmergencyAlerts:Client:UpdateMember", emergencyAlertsData[source])
		end
	end,
	RefreshCallsign = function(self, stateId, newCallsign)
		for k, v in pairs(emergencyAlertsData) do
			if v.SID == stateId then
				if v.Callsign then -- Updating an already existing callsign
					for unitKey, unit in ipairs(emergencyAlertsUnits) do
						if unit.primary == v.Callsign then
							unit.primary = newCallsign
							break
						else
							for subUnitKey, subUnit in ipairs(unit.units) do
								if subUnit == v.Callsign then
									unit.units[subUnitKey] = newCallsign
								end
								break
							end
						end
					end
					emergencyAlertsData[k].Callsign = newCallsign
				else -- Just got assigned a callsign
					emergencyAlertsData[k].Callsign = newCallsign
					local char = Fetch:CharacterData("Callsign", newCallsign)
					table.insert(emergencyAlertsUnits, {
						job = v.Job,
						type = _alertsDefaultType[v.Job],
						available = true,
						character = {
							SID = char:GetData("SID"),
							First = char:GetData("First"),
							Last = char:GetData("Last"),
							Phone = char:GetData("Phone"),
						},
						pursuitMode = "N/A",
						primary = newCallsign,
						units = {},
					})
				end
			end
		end
	end,
	RefreshPursuitMode = function(self, callsign, pursuitMode)
		for k, v in ipairs(emergencyAlertsUnits) do
			if v.primary == callsign then
				emergencyAlertsUnits[k].pursuitMode = pursuitMode
				EmergencyAlerts:SendUnitUpdates()
				return
			else
				for subUnitKey, subUnit in ipairs(v.units) do
					if subUnit == callsign then
						emergencyAlertsUnits[k].pursuitMode = pursuitMode
						EmergencyAlerts:SendUnitUpdates()
						return
					end
				end
			end
		end
	end,
	SendUnitUpdates = function(self)
		EmergencyAlerts:SendOnDutyEvent("EmergencyAlerts:Client:UpdateUnits", emergencyAlertsUnits)
	end,
	SendMemberUpdates = function(self)
		EmergencyAlerts:SendOnDutyEvent("EmergencyAlerts:Client:UpdateMembers", emergencyAlertsData)
	end,
	SendOnDutyEvent = function(self, event, data)
		for k, v in pairs(emergencyAlertsData) do
			TriggerClientEvent(event, k, data)
		end
	end,
}
