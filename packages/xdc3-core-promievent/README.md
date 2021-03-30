# xdc3-core-promievent

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [xdc3.js][repo].

This is the PromiEvent package used to return a EventEmitter mixed with a Promise to allow multiple final states as well as chaining.

Please read the [documentation][docs] for more.

## Installation

### Node.js

```bash
npm install xdc3-core-promievent
```

## Usage

```js
const Web3PromiEvent = require('xdc3-core-promievent');

const myFunc = function(){
    const promiEvent = Web3PromiEvent();
    
    setTimeout(function() {
        promiEvent.eventEmitter.emit('done', 'Hello!');
        promiEvent.resolve('Hello!');
    }, 10);
    
    return promiEvent.eventEmitter;
};

// and run it
myFunc()
.on('done', console.log)
.then(console.log);
```

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/xdc3.js
[npm-image]: https://img.shields.io/npm/v/xdc3-core-promievent.svg
[npm-url]: https://npmjs.org/package/xdc3-core-promievent
[deps-image]: https://david-dm.org/ethereum/xdc3.js/1.x/status.svg?path=packages/xdc3-core-promievent
[deps-url]: https://david-dm.org/ethereum/xdc3.js/1.x?path=packages/xdc3-core-promievent
[deps-dev-image]: https://david-dm.org/ethereum/xdc3.js/1.x/dev-status.svg?path=packages/xdc3-core-promievent
[deps-dev-url]: https://david-dm.org/ethereum/xdc3.js/1.x?type=dev&path=packages/xdc3-core-promievent
