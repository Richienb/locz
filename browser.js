"use strict"

const ipLocation = require("./lib/ip-location")
const getCurrentPosition = require("./lib/current-position")

module.exports = async () => {
	if (navigator && navigator.geolocation) {
		try {
			return await getCurrentPosition()
		} catch {}
	}

	return ipLocation()
}
