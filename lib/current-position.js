"use strict"

module.exports = () => new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition(({ coords }) => resolve(coords), reject, {
		enableHighAccuracy: true
	})
})
