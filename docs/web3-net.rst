.. _net:

========
xdc3.*.net
========


The ``xdc3-net`` package allows you to interact with an Ethereum node's network properties.


.. code-block:: javascript

    var Net = require('xdc3-net');

    // "Personal.providers.givenProvider" will be set if in an Ethereum supported browser.
    var net = new Net(Net.givenProvider || 'ws://some.local-or-remote.node:8546');


    // or using the xdc3 umbrella package

    var Web3 = require('xdc3');
    var xdc3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

    // -> xdc3.eth.net
    // -> xdc3.bzz.net
    // -> xdc3.shh.net



------------------------------------------------------------------------------


.. include:: include_package-net.rst


------------------------------------------------------------------------------
