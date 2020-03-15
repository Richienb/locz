"use strict"

const ky = require("ky-universal")

module.exports = async () => {
	const { loc } = await ky("https://ipinfo.io/json").json()
	const [latitude, longitude] = loc.split(",")
	return {
		latitude: Number(latitude),
		longitude: Number(longitude),
	}
}
