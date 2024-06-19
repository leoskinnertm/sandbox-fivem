AddEventHandler("Characters:Client:Spawn", function()
	Citizen.Wait(5000)
	StartThreads()
end)

local _ignored = {
	[`WEAPON_PETROLCAN`] = true,
	[`WEAPON_FIREEXTINGUISHER`] = true,
	[`WEAPON_FLARE`] = true,
	[`WEAPON_TASER`] = true,
	[`WEAPON_STUNGUN`] = true,
	[`WEAPON_BALL`] = true,
	[`WEAPON_SNOWBALL`] = true,
	[`WEAPON_GRENADE`] = true,
	[`WEAPON_BZGAS`] = true,
	[`WEAPON_MOLOTOV`] = true,
	[`WEAPON_STICKYBOMB`] = true,
	[`WEAPON_PROXMINE`] = true,
	[`WEAPON_PIPEBOMB`] = true,
	[`WEAPON_SMOKEGRENADE`] = true,
	[`WEAPON_FLARE`] = true,
	[`WEAPON_FIREEXTINGUISHER`] = true,
	[`WEAPON_PETROLCAN`] = true,
	[`WEAPON_SNIPERRIFLE2`] = true, -- Hunting Rifle
}

local _excludes = {
	{ coords = vector3(1713.17, 2586.68, 59.88), dist = 250 }, -- prison
	{ coords = vector3(-106.63, 6467.72, 31.62), dist = 45 }, -- paleto bank
	{ coords = vector3(251.21, 217.45, 106.28), dist = 20 }, -- city bank
	{ coords = vector3(-622.25, -230.93, 38.05), dist = 10 }, -- jewlery store
	{ coords = vector3(233.37, 373.31, 106.14), dist = 20 }, -- xgems
	{ coords = vector3(699.91, 132.29, 80.74), dist = 55 }, -- power 1
	{ coords = vector3(2739.55, 1532.99, 57.56), dist = 235 }, -- power 2
	{ coords = vector3(12.53, -1097.99, 29.8), dist = 10 }, -- Adam's Apple / Pillbox Weapon shop
}

local timeOut, stressTimeout, alertTimeout = false, false, false
AddEventHandler('CEventGunShot', function(entities, eventEntity, args)
	if timeOut then return end
	if _ignored[LocalPlayer.state.CurrentWeapon] then return end
	if eventEntity ~= LocalPlayer.state.ped then return end

	timeOut = true
	SetTimeout(1000, function()
		timeOut = false
	end)

	if not stressTimeout then
		stressTimeout = true
			Status.Modify:Add("PLAYER_STRESS", 1, false, true)
		SetTimeout(40000, function()
			stressTimeout = false
		end)
	end

	local luck = math.random(0, 1)
	if not alertTimeout and LocalPlayer.state.onDuty ~= "police" and luck == 0 then
		alertTimeout = true

		local veh = GetVehiclePedIsIn(LocalPlayer.state.ped, false)

		if veh ~= 0 then
			local r, g, b = GetVehicleCustomPrimaryColour(veh)

			local vehModel = GetEntityModel(veh)
			local vehName = GetLabelText(GetDisplayNameFromVehicleModel(vehModel))
			if vehName == "NULL" then
				vehName = GetDisplayNameFromVehicleModel(vehModel)
			end

			local vehEnt = Entity(veh)
			if vehEnt and vehEnt.state and vehEnt.state.Make and vehEnt.state.Model then
				vehName = vehEnt.state.Make .. " " .. vehEnt.state.Model
			end

			EmergencyAlerts:CreateIfReported(500.0, "shotsfiredvehicle", true, {
				icon = "car",
				details = vehName,
				vehicleColor = {
					r = r,
					g = g,
					b = b,
				},
			})
		elseif IsPedCurrentWeaponSilenced(LocalPlayer.state.ped) then
			EmergencyAlerts:CreateIfReported(10.0, "shotsfired", true)
		else
			EmergencyAlerts:CreateIfReported(900.0, "shotsfired", true)
		end

		SetTimeout(60000, function()
			alertTimeout = false
		end)
	end

	LocalPlayer.state:set("GSR", GetCloudTimeAsInt(), true)
end)
