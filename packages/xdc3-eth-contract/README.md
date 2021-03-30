# xdc3-eth-contract

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo].

This is the contract package used in the `xdc3-eth` package.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-eth-contract
```

## Usage

```js
const Web3EthContract = require('xdc3-eth-contract');

// Set provider for all later instances to use
Web3EthContract.setProvider('ws://localhost:8546');

const contract = new Web3EthContract(jsonInterface, address);
contract.methods.somFunc().send({from: ....})
.on('receipt', function(){
    ...
});
```

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js

## Types

All the TypeScript typings are placed in the `types` folder.

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-eth-contract.svg
[npm-url]: https://npmjs.org/package/xdc3-eth-contract
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-eth-contract
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-eth-contract
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-eth-contract
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-eth-contract
