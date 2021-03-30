var chai = require('chai');
var assert = chai.assert;
var Eth = require('../packages/xdc3-eth');

var eth = new Eth();

var setValue = true;

describe('xdc3.eth', function () {
    describe('handleRevert', function () {
        it('should check if handleRevert is set to proper value', function () {
            assert.equal(eth.handleRevert, false);
            assert.equal(eth.Contract.handleRevert, false);
            assert.equal(eth.getCode.method.handleRevert, false);
        });

        it('should set handleRevert for all sub packages', function () {
            eth.handleRevert = setValue;

            assert.equal(eth.handleRevert, setValue);
            assert.equal(eth.Contract.handleRevert, setValue);
            assert.equal(eth.getCode.method.handleRevert, setValue);
        });
    });
});

