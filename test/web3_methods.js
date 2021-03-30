var u = require('./helpers/test.utils.js');
var Web3 = require('../packages/xdc3');
var xdc3 = new Web3();

describe('xdc3', function() {
    describe('methods', function () {
        u.methodExists(xdc3, 'setProvider');

        u.propertyExists(xdc3, 'givenProvider');

        u.propertyExists(xdc3, 'eth');
        u.propertyExists(xdc3, 'bzz');
        u.propertyExists(xdc3, 'shh');

        u.propertyExists(xdc3, 'utils');
    });
});

