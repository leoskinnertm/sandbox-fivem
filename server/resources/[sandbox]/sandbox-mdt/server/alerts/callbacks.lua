function RegisterEACallbacks()
	Callbacks:RegisterServerCallback("EmergencyAlerts:DisablePDTracker", function(source, target, cb)
		local char = Fetch:CharacterSource(source)
		if char then
			local tState = Player(target).state
			local targetChar = Fetch:CharacterSource(target)
			if targetChar and tState and tState.onDuty == "police" and not tState.trackerDisabled then
				Player(target).state.trackerDisabled = true
				EmergencyAlerts:DisableTracker(target, true)
				Execute:Client(target, "Notification", "Info", "Your Tracker Has Been Disabled")
				cb(true)
				return
			end
		end
		cb(false)
	end)

	-- PD re-enabling their own tracker
	Callbacks:RegisterServerCallback("EmergencyAlerts:EnablePDTracker", function(source, target, cb)
		local char = Fetch:CharacterSource(source)
		if char and Player(source).state.trackerDisabled then
			Player(source).state.trackerDisabled = false
			EmergencyAlerts:DisableTracker(source, false)

			Jobs.Duty:Off(source, false, true)
			Citizen.Wait(250)
			Jobs.Duty:On(source, "police", true)

			cb(true)
		else
			cb(false)
		end
	end)
end