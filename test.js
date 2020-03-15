const test = require("ava")
const locz = require(".")

test("main", async (t) => {
	const { latitude, longitude } = await locz()
	t.is(typeof latitude, "number")
	t.is(typeof longitude, "number")
})
