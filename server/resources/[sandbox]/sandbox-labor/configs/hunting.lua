HuntingConfig = {
	Baits = {
		["hunting_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"boar",
				"deer",
				"pig",
				"coyote",
				"mtlion",
				"panther",
				"retriever",
			},
		},
		["cow_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"cow",
			},
		},
		["deer_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"deer",
			},
		},
		["boar_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"boar",
			},
		},
		["pig_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"pig",
			},
		},
		["chicken_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"chicken",
				"hen",
			},
		},
		["rabbit_bait"] = {
			time = 2,
			cooldown = 2,
			distance = 25,
			animals = {
				"rabbit",
			},
		},
		["exotic_bait"] = {
			time = 5,
			cooldown = 5,
			distance = 25,
			animals = {
				"chop",
				"husky",
				"poodle",
				"pug",
				"retriever",
				"rottweiler",
				"shepherd",
				"westy",
				"panther",
				"chimp",
				"chimp2",
			},
		},
	},
	Zones = {
		{ -- ZONE A
			coords = vector3(501.57, 5602.24, 799.15),
			radius = 1800.0,
			options = {
				name = "hunting1",
				useZ = true,
				debugPoly = false,
			},
		},
		{ -- ZONE D
			coords = vector3(2837.09, 2371.67, 170.54),
			radius = 510.76,
			options = {
				name = "hunting2",
				useZ = true,
				debugPoly = false,
			},
		},
		{ -- ZONE E
			coords = vector3(3431.01, 4209.0, 238.07),
			radius = 500.0,
			illegal = true,
			options = {
				name = "hunting3",
				useZ = true,
				debugPoly = false,
			},
		},
		{ -- ZONE B
			coords = vector3(635.52, 1309.94, 365.77),
			radius = 1800.05,
			options = {
				name = "hunting4",
				useZ = true,
				debugPoly = false,
			},
		},
		{ -- ZONE C
			coords = vector3(-2368.14, 1333.83, 333.53),
			radius = 600.05,
			illegal = true,
			options = {
				name = "hunting5",
				useZ = true,
				debugPoly = false,
			},
		},
	},
	Animals = {
		pig = { ID = "pig", Name = "Pig", Model = `a_c_pig` },
		boar = { ID = "boar", Name = "Boar", Model = `a_c_boar` },
		deer = { ID = "deer", Name = "Deer", Model = `a_c_deer` },
		chicken = { ID = "chicken", Name = "Chicken", Model = `a_c_chickenhawk` },
		hen = { ID = "hen", Name = "Hen", Model = `a_c_hen` },
		cow = { ID = "cow", Name = "Cow", Model = `a_c_cow` },
		rabbit = { ID = "rabbit", Name = "Rabbit", Model = `a_c_rabbit_01` },
		coyote = { ID = "coyote", Name = "Coyote", Model = `a_c_coyote` },
		rat = { ID = "rat", Name = "Rat", Model = `a_c_rat` },
		crow = { ID = "crow", Name = "Crow", Model = `a_c_crow` },
		cormorant = { ID = "cormorant", Name = "Cormorant", Model = `a_c_cormorant` },
		pigeon = { ID = "pigeon", Name = "Pigeon", Model = `a_c_pigeon` },
		seagull = { ID = "seagull", Name = "Seagull", Model = `a_c_seagull` },
		mtlion = { ID = "mtlion", Name = "Mountain-Lion", Model = `a_c_mtlion`, Illegal = true },
		panther = { ID = "panther", Name = "Panther", Model = `a_c_panther`, Illegal = true },
		chop = { ID = "chop", Name = "Chop", Model = `a_c_chop`, Illegal = true },
		husky = { ID = "husky", Name = "Husky", Model = `a_c_husky`, Illegal = true },
		poodle = { ID = "poodle", Name = "Poodle", Model = `a_c_poodle`, Illegal = true },
		pug = { ID = "pug", Name = "Pug", Model = `a_c_pug`, Illegal = true },
		retriever = { ID = "retriever", Name = "Retriever", Model = `a_c_retriever`, Illegal = true },
		chimp = { ID = "chimp", Name = "Chimp", Model = `a_c_chimp`, Illegal = true },
		chimp2 = { ID = "chimp2", Name = "Chimp", Model = `a_c_rhesus`, Illegal = true },
		rottweiler = { ID = "rottweiler", Name = "Rottweiler", Model = `a_c_rottweiler`, Illegal = true },
		shepherd = { ID = "sheperd", Name = "Shepherd", Model = `a_c_shepherd`, Illegal = true },
		westy = { ID = "Westy", Name = "Westy", Model = `a_c_westy`, Illegal = true },
	},
}

HuntingSrvConfig = {
	Loot = {
		pig = { { name = "pork", min = 9, max = 12 } },
		boar = { { name = "pork", min = 12, max = 18 } },
		deer = { { name = "venison", min = 6, max = 9 } },
		chicken = { { name = "chicken", min = 6, max = 9 } },
		hen = { { name = "chicken", min = 6, max = 12 } },
		cow = { { name = "beef", min = 16, max = 24 } },
		rabbit = { { name = "unk_meat", min = 6, max = 9 } },
		coyote = { { name = "unk_meat", min = 6, max = 12 } },
		rat = { { name = "unk_meat", min = 6, max = 12 } },
		crow = { { name = "unk_meat", min = 6, max = 12 } },
		cormorant = { { name = "unk_meat", min = 6, max = 12 } },
		pigeon = { { name = "unk_meat", min = 6, max = 12 } },
		seagull = { { name = "unk_meat", min = 6, max = 12 } },
		mtlion = { { name = "unk_meat", min = 12, max = 18 } },
		panther = { { name = "unk_meat", min = 12, max = 18 } },
		chop = { { name = "unk_meat", min = 6, max = 12 } },
		husky = { { name = "unk_meat", min = 6, max = 12 } },
		poodle = { { name = "unk_meat", min = 6, max = 9 } },
		pug = { { name = "unk_meat", min = 6, max = 9 } },
		retriever = { { name = "unk_meat", min = 6, max = 12 } },
		chimp = { { name = "unk_meat", min = 10, max = 15 } },
		chimp2 = { { name = "unk_meat", min = 10, max = 15 } },
		rottweiler = { { name = "unk_meat", min = 6, max = 12 } },
		sheperd = { { name = "unk_meat", min = 6, max = 12 } },
		westy = { { name = "unk_meat", min = 6, max = 9 } },
	},
}
