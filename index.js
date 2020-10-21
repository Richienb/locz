"use strict"

const commandExists = require("command-exists")

const macos = require("./lib/platforms/macos")
const windows = require("./lib/platforms/windows")
const ipLocation = require("./lib/ip-location")
const networkLocation = require("./lib/network-location")

const { platform } = process

module.exports = async () => {
	if (platform === "darwin") {
		try {
			return await macos()
		} catch {}
	}

	if (platform === "win32" && await commandExists("powershell")) {
		try {
			return await windows()
		} catch {}
	}

	try {
		return await networkLocation()
	} catch {}

	return ipLocation()
}
