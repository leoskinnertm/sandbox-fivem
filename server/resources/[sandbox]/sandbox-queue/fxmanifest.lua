fx_version("cerulean")
games({ "gta5" })
lua54("yes")
client_script("@sandbox-base/components/cl_error.lua")
client_script("@sandbox-pwnzor/client/check.lua")

server_only("yes")

server_scripts({
	"config.lua",
	"server/*.lua",
})
