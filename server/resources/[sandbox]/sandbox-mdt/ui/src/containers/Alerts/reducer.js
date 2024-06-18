export const initialState = {
	showing: false,
	onDuty: Array(),
	alerts: Array(),
	// showing: true,
	// onDuty: [
	// 	{
	// 		job: 'police',
	// 		type: 'car',
	// 		primary: 400,
	// 		units: [300, 600, 500, 502],
	// 		pursuitMode: "B"
	// 	},
	// 	{
	// 		job: 'police',
	// 		type: 'car',
	// 		primary: 401,
	// 		units: [],
	// 		pursuitMode: "A"
	// 	},
	// 	{
	// 		job: 'police',
	// 		type: 'car',
	// 		primary: 402,
	// 		units: [],
	// 		pursuitMode: "N/A"
	// 	},
	// 	{
	// 		job: 'police',
	// 		type: 'car',
	// 		primary: 403,
	// 		units: [],
	// 		pursuitMode: "S"
	// 	},
	// 	{
	// 		job: 'ems',
	// 		type: 'bus',
	// 		primary: 100,
	// 		units: [],
	// 		pursuitMode: "C"
	// 	},
	// 	{
	// 		job: 'ems',
	// 		type: 'bus',
	// 		primary: 80,
	// 		units: [],
	// 		pursuitMode: "C"
	// 	},
	// 	{
	// 		job: 'ems',
	// 		type: 'bus',
	// 		primary: 80,
	// 		units: [],
	// 		pursuitMode: "C"
	// 	},
	// 	{
	// 		job: 'ems',
	// 		type: 'lifeflight',
	// 		primary: 80,
	// 		units: [],
	// 		pursuitMode: "C"
	// 	},
	// 	{
	// 		job: 'ems',
	// 		type: 'car',
	// 		primary: 101,
	// 		units: [122],
	// 		pursuitMode: "N/A"
	// 	},
	// ],
	// alerts: [
	// 	{
	// 		id: 1,
	// 		title: 'Breaking & Entering',
	// 		code: '10-31A',
	// 		type: 1,
	// 		time: Date.now(),
	// 		location: {
	// 			street1: 'Buccaneer Way',
	// 			street2: null,
	// 			area: 'Terminal',
	// 			x: 0,
	// 			y: 0,
	// 			z: 0,
	// 		},
	// 		description: {
	// 			icon: 'car',
	// 			details: 'White Gauntlet',
	// 			vehicleColor: { r: 0, g: 0, b: 0 },
	// 			vehiclePlate: "AAAAAA",
	// 			vehicleClass: "D",
	// 		},
	// 		onScreen: true,
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Breaking & Entering',
	// 		code: '10-31A',
	// 		type: 2,
	// 		time: Date.now(),
	// 		location: {
	// 			street1: 'Buccaneer Way',
	// 			street2: null,
	// 			area: 'Terminal',
	// 			x: 0,
	// 			y: 0,
	// 			z: 0,
	// 		},
	// 		description: {
	// 			icon: 'car',
	// 			details: 'White Gauntlet',
	// 		},
	// 		onScreen: true,
	// 		panic: true,
	// 	},
	// 	{
	// 		id: 3,
	// 		title: 'Breaking & Entering',
	// 		code: '10-31A',
	// 		type: 3,
	// 		time: Date.now(),
	// 		location: {
	// 			street1: 'Buccaneer Way',
	// 			street2: null,
	// 			area: 'Terminal',
	// 			x: 0,
	// 			y: 0,
	// 			z: 0,
	// 		},
	// 		description: {
	// 			icon: 'car',
	// 			details: 'White Gauntlet',
	// 		},
	// 		onScreen: true,
	// 		panic: true,
	// 	},
	// ],
	// emergencyMembers: [
	// 	{
	// 		Job: 'police',
	// 		Callsign: 400,
	// 		First: 'John',
	// 		Last: 'Cena',
	// 		PursuitMode: "N/A",
	// 		SID: 1,
	// 	},
	// 	{
	// 		Job: 'police',
	// 		Callsign: 401,
	// 		First: 'Bryan',
	// 		Last: 'Smith',
	// 		PursuitMode: "N/A",
	// 		SID: 1,
	// 	},
	// 	{
	// 		Job: 'police',
	// 		Callsign: 402,
	// 		First: 'Chris',
	// 		Last: 'Scott',
	// 		PursuitMode: "N/A",
	// 		SID: 1,
	// 	},
	// 	{
	// 		Job: 'police',
	// 		Callsign: 403,
	// 		First: 'Ethan',
	// 		Last: 'Moon',
	// 		PursuitMode: "N/A",
	// 		SID: 1,
	// 	},
	// 	{
	// 		Job: 'police',
	// 		Callsign: 300,
	// 		First: 'Bob',
	// 		Last: 'Cena',
	// 		PursuitMode: "N/A",
	// 		SID: 2,
	// 	},
	// 	{
	// 		Job: 'police',
	// 		Callsign: 500,
	// 		First: 'Bob',
	// 		Last: 'Cena',
	// 		PursuitMode: "N/A",
	// 		SID: 3,
	// 	},
	// 	{
	// 		Job: 'ems',
	// 		Callsign: 101,
	// 		First: 'Bob',
	// 		Last: 'Cena',
	// 		SID: 3,
	// 	},
	// 	{
	// 		Callsign: 122,
	// 		First: 'Fuck',
	// 		Last: 'Cena',
	// 		SID: 3,
	// 	},
	// 	{
	// 		//Callsign: 122,
	// 		First: 'Fuck',
	// 		Last: 'Cena',
	// 		SID: 3,
	// 	},
	// ],
};

export default (state = initialState, action) => {
	switch (action.type) {
		case 'RESET_ALERTS':
			return {
				...state,
				alerts: Array(),
			};
		case 'SET_SHOWING':
			return {
				...state,
				showing: action.payload.state,
			};
		case 'ADD_ALERT':
			return {
				...state,
				alerts: [
					...state.alerts,
					{
						...action.payload.alert,
						onScreen: true,
						time: Date.now(),
					},
				],
			};
		case 'EXPIRE_ALERT':
			return {
				...state,
				alerts: state.alerts.map((alert) => {
					if (alert.id == action.payload) return { ...alert, onScreen: false };
					else return alert;
				}),
			};
		case 'UPDATE_UNITS':
			return {
				...state,
				onDuty: action.payload.units,
			};
		case 'UPDATE_MEMBERS':
			return {
				...state,
				emergencyMembers: action.payload.members,
			};
		default:
			return state;
	}
};
