"use strict"

const execa = require("execa")
const commandExists = require("command-exists")

const ipLocation = require("./lib/ip-location")

const { platform } = process

module.exports = async () => {
	try {
		if (platform === "darwin") {
			const { stdout } = await execa.command("./lib/platforms/macos/whereami", { timeout: 5000 })
			const { latitude, longitude } = stdout.match(/Latitude: (?<latitude>.+), \nLongitude: (?<longitude>.+)/m).groups
			return {
				latitude: Number(latitude),
				longitude: Number(longitude),
			}
		}

		if (platform === "win32" && await commandExists("powershell")) {
			const { stdout } = await execa("powershell", ["-ExecutionPolicy", "Bypass", "./lib/platforms/windows/location.ps1"], { timeout: 5000 })
			const { latitude, longitude } = stdout.match(/(?<coordinates>[+-]?(?:\d*\.)?\d+)/g).groups.coordinates
			return {
				latitude: Number(latitude),
				longitude: Number(longitude),
			}
		}
	} catch (_) { }

	return ipLocation()
}
