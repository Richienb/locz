const execa = require("execa")

module.exports = async () => {
	const { stdout } = await execa("powershell", ["-ExecutionPolicy", "Bypass", "./location.ps1"], { timeout: 5000, cwd: __dirname })
	const [latitude, longitude] = stdout.match(/(?:[+-]?(?:\d*\.)?\d+)/g)
	return {
		latitude: Number(latitude),
		longitude: Number(longitude)
	}
}
