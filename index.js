"use strict"

const commandExists = require("command-exists")

const ipLocation = require("./lib/ip-location")

const { platform } = process

module.exports = async () => {
	try {
		if (platform === "darwin") {
			return await require("./lib/platforms/macos")()
		}

		if (platform === "win32" && await commandExists("powershell")) {
			return await require("./lib/platforms/windows")()
		}
	} catch (_) { }

	// return ipLocation()
}
