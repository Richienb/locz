"use strict"

module.exports = () => new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition(({ coords: coordinates }) => resolve({
		latitude: coordinates.latitude,
		longitude: coordinates.longitude
	}), reject, {
		enableHighAccuracy: true
	})
})
