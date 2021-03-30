# xdc3-utils

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo].

This contains useful utility functions for Dapp developers.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-utils
```

## Usage

```js
const Web3Utils = require('xdc3-utils');
console.log(Web3Utils);
{
    sha3: function(){},
    soliditySha3: function(){},
    isAddress: function(){},
    ...
}
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-utils.svg
[npm-url]: https://npmjs.org/package/xdc3-utils
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-utils
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-utils
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-utils
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-utils
