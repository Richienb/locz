"use strict"
const wifi = require("node-wifi")
const mls = require("../util/mls")

module.exports = async () => {
	wifi.init()

	const wifiAccessPoints = (await wifi.scan()).map(({ mac: macAddress, signal_level: signalStrength, channel }) => ({
		macAddress,
		signalStrength,
		channel
	}))

	return mls({
		wifiAccessPoints
	})
}
