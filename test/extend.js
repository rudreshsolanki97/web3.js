var chai = require('chai');
var assert = chai.assert;
var FakeHttpProvider = require('./helpers/FakeIpcProvider');
var Web3 = require('../packages/xdc3');
var xdc3 = new Web3();


var tests = [{
    methods: [{
        name: 'getGasPrice2',
        call: 'eth_gasPrice',
        outputFormatter: xdc3.extend.formatters.outputBigNumberFormatter
    },{
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [xdc3.utils.toChecksumAddress, xdc3.extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: xdc3.extend.formatters.outputBigNumberFormatter
    }]
},{
    property: 'admin',
    methods: [{
        name: 'getGasPrice3',
        call: 'eth_gasPrice',
        outputFormatter: xdc3.extend.formatters.outputBigNumberFormatter
    },{
        name: 'getBalance',
        call: 'eth_getBalance',
        params: 2,
        inputFormatter: [xdc3.utils.toChecksumAddress, xdc3.extend.formatters.inputDefaultBlockNumberFormatter],
        outputFormatter: xdc3.extend.formatters.outputBigNumberFormatter
    }]
},{
    error: true,
    methods: [{
        name: 'getGasPrice4',
        outputFormatter: xdc3.extend.formatters.outputBigNumberFormatter
    }]
},{
    error: true,
    methods: [{
        call: 'eth_gasPrice',
        outputFormatter: xdc3.extend.formatters.outputBigNumberFormatter
    }]
}];

describe('xdc3', function () {
    describe('extend', function () {
        tests.forEach(function (test, index) {
            it('test no: ' + index, function (done) {
                var count = 1;

                var provider = new FakeHttpProvider();
                xdc3.setProvider(provider);

                if(test.error) {
                    assert.throws(xdc3.extend.bind(xdc3,test));

                    return done();

                } else {
                    xdc3.extend(test);
                }

                if(test.methods) {
                    test.methods.forEach(function(property){


                        provider.injectResult('0x1234');
                        provider.injectValidation(function (payload) {
                            assert.equal(payload.jsonrpc, '2.0');
                            assert.equal(payload.method, property.call);

                            if(test.methods.length === count)
                                done();
                            else
                                count++;
                        });

                        if(test.property) {
                            assert.isFunction(xdc3[test.property][property.name]);
                            xdc3[test.property][property.name]();
                        } else {
                            assert.isFunction(xdc3[property.name]);
                            xdc3[property.name]();
                        }
                    });
                }
            });
        });
    });
});

