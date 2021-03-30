# xdc3-eth-ens

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo].

This is the contract package to be used in the `xdc3-eth` package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-eth-ens
```

## Usage

```js
const eth = new Web3Eth(xdc3.currentProvider);
const ens = new EthEns(eth);

ens.getAddress('ethereum.eth').then(function(result) {
    console.log(result);
});
```

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-eth-ens.svg
[npm-url]: https://npmjs.org/package/xdc3-eth-ens
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-eth-ens
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-eth-ens
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-eth-ens
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-eth-ens