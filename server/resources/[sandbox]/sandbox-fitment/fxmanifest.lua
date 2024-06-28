fx_version("cerulean")
games({ "gta5" })
lua54("yes")
client_script("@sandbox-base/components/cl_error.lua")
client_script("@sandbox-pwnzor/client/check.lua")

description("AuthenticRP Wheel Fitment For Panda Because He is a Needy Cunt")
name("AuthenticRP: sandbox-fitment")
author("Dr Nick")
version("v1.0.0")
url("https://www.mythicrp.com")

client_scripts({
	"client/**/*.lua",
})

server_scripts({
	"server/**/*.lua",
})
