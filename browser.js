"use strict"

const ipLocation = require("./lib/ip-location")
const getCurrentPosition = require("./lib/current-position")

module.exports = async () => {
	try {
		return await getCurrentPosition()
	} catch (_) {}

	return ipLocation()
}
