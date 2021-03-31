# xdc3-eth-accounts

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo].

This is the accounts package used in the `xdc3-eth` package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-eth-accounts
```

## Usage

```js
const Web3EthAccounts = require('xdc3-eth-accounts');

const account = new Web3EthAccounts('ws://localhost:8546');
account.create();
> {
  address: '0x2c7536E3605D9C16a7a3D7b1898e529396a65c23',
  privateKey: '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318',
  signTransaction: function(tx){...},
  sign: function(data){...},
  encrypt: function(password){...}
}
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-eth-accounts.svg
[npm-url]: https://npmjs.org/package/xdc3-eth-accounts
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-eth-accounts
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-eth-accounts
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-eth-accounts
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-eth-accounts