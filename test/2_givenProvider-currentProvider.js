var chai = require('chai');
var assert = chai.assert;
var decache = require('decache');

describe('Web3.providers.currentProvider', function () {

    // Setting of 'global.' requires a deep reset
    beforeEach(function(){
        decache('../packages/xdc3');
        decache('../packages/xdc3-eth');
        decache('../packages/xdc3-bzz');
    });

    describe('should be set if xdc3.currentProvider is available', function () {
        beforeEach(function(){
            global.xdc3 = {currentProvider: {bzz: 'http://givenProvider:8501'}};
        });

        it('when instantiating Web3', function () {
            var Web3 = require('../packages/xdc3');
            assert.deepEqual(Web3.givenProvider, global.xdc3.currentProvider);
        });

        it('when instantiating Eth', function () {
            var Eth = require('../packages/xdc3-eth');
            assert.deepEqual(Eth.givenProvider, global.xdc3.currentProvider);
        });
    });
});

