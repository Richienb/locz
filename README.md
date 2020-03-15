# Get Location [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/get-location/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/get-location)

Get the coordinates of the current location.

[![NPM Badge](https://nodei.co/npm/get-location.png)](https://npmjs.com/package/get-location)

## Install

```sh
npm install get-location
```

## Usage

```js
const getLocation = require("get-location");

(async () => {
	await getLocation();
	//=> { latitude: -36.8484437, longitude: 174.7600023 }
})();
```

## API

### getLocation()
