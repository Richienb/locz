const test = require("ava")
const getLocation = require(".")

test("main", async (t) => {
	const { latitude, longitude } = await getLocation()
	t.is(typeof latitude, "number")
	t.is(typeof longitude, "number")
})
