/**
 * Coordinate data.
*/
interface LocationData {
	latitude: number
	longitude: number
}

/**
 * Get the coordinates of the current location.
 * @example
 * ```
 * const getLocation = require("get-location");
 *
 * (async () => {
 * 	await getLocation();
 * 	//=> { latitude: -36.8484437, longitude: 174.7600023 }
 * })();
 * ```
*/
declare function getLocation(): Promise<LocationData>

export = getLocation
