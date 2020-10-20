"use strict"

module.exports = () => new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition(({ coords: coordinates }) => resolve(coordinates), reject, {
		enableHighAccuracy: true
	})
})
