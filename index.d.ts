/**
 * Get the coordinates of the current location.
 * @example
 * ```
 * const locz = require("locz");
 *
 * (async () => {
 * 	await locz();
 * 	//=> { latitude: -36.8484437, longitude: 174.7600023 }
 * })();
 * ```
*/
declare function locz(): Promise<locz.LocationData>

declare namespace locz {
	/**
	 * Coordinate data.
	 */
	interface LocationData {
		latitude: number
		longitude: number
	}
}

export = locz
