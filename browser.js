"use strict"

const ipLocation = require("./lib/ip-location")
const getCurrentPosition = require("./lib/current-position")

module.exports = async () => {
	return navigator.geolocation ? getCurrentPosition() : ipLocation()
}
