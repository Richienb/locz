"use strict"

const commandExists = require("command-exists")

const macos = require("./lib/platforms/macos")
const windows = require("./lib/platforms/windows")
const ipLocation = require("./lib/ip-location")

const { platform } = process

module.exports = async () => {
	try {
		if (platform === "darwin") {
			return await macos()
		}

		if (platform === "win32" && await commandExists("powershell")) {
			return await windows()
		}
	} catch (_) { }

	return ipLocation()
}
