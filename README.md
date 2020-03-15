# locz [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/locz/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/locz)

Get the coordinates of the current location.

[![NPM Badge](https://nodei.co/npm/locz.png)](https://npmjs.com/package/locz)

## Install

```sh
npm install locz
```

## Usage

```js
const locz = require("locz");

(async () => {
	await locz();
	//=> { latitude: -36.8484437, longitude: 174.7600023 }
})();
```

## API

### locz()
