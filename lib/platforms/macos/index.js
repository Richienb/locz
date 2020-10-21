"use strict"

const execa = require("execa")

module.exports = async () => {
	const { stdout } = await execa.command("./whereami", { timeout: 5000, cwd: __dirname })
	const { latitude, longitude } = stdout.match(/Latitude: (?<latitude>.+), \nLongitude: (?<longitude>.+)/m).groups
	return {
		latitude: Number(latitude),
		longitude: Number(longitude)
	}
}
