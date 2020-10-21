"use strict"
const ky = require("ky-universal")

module.exports = async data => {
	const { location } = await ky("https://location.services.mozilla.com/v1/geolocate", {
		searchParams: {
			key: "geoclue"
		},
		json: data,
		timeout: 5000
	}).json()

	return { latitude: location.lat, longitude: location.lng }
}
