"use strict"

const macos = require("./lib/platforms/macos")
const windows = require("./lib/platforms/windows")
const networkLocation = require("./lib/network-location")
const ipLocation = require("./lib/ip-location")

const { platform } = process

module.exports = async () => {
	if (platform === "darwin") {
		try {
			return await macos()
		} catch {}
	}

	if (platform === "win32") {
		try {
			return await windows()
		} catch {}
	}

	try {
		return await networkLocation()
	} catch {}

	return ipLocation()
}
