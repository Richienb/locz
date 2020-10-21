"use strict"
const ipLocation = require("./lib/ip-location")
const getCurrentPosition = require("./lib/current-position")

module.exports = async () => {
	if (typeof navigator === "object" && typeof navigator.geolocation === "function") {
		try {
			return await getCurrentPosition()
		} catch {}
	}

	return ipLocation()
}
