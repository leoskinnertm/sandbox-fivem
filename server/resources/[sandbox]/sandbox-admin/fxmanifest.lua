fx_version("cerulean")
game("gta5")
lua54("yes")
client_script("@sandbox-base/components/cl_error.lua")
client_script("@sandbox-pwnzor/client/check.lua")


client_scripts({
	"client/client.lua",
	"client/attach.lua",
	"client/noclip/*.lua",
	"client/nui.lua",
	"client/ids.lua",
	"client/nuke.lua",
	"client/damage_test.lua",
})

server_scripts({
	"server/*.lua",
})

ui_page("ui/dist/index.html")

files({ "ui/dist/index.html", "ui/dist/*.js" })
