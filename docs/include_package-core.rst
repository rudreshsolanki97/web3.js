

setProvider
=====================

.. code-block:: javascript

    xdc3.setProvider(myProvider)
    xdc3.eth.setProvider(myProvider)
    xdc3.shh.setProvider(myProvider)
    xdc3.bzz.setProvider(myProvider)
    ...

Will change the provider for its module.

.. note::
    When called on the umbrella package ``xdc3`` it will also set the provider for all sub modules ``xdc3.eth``, ``xdc3.shh``, etc. EXCEPT ``xdc3.bzz`` which needs a separate provider at all times.

----------
Parameters
----------

1. ``Object`` - ``myProvider``: :ref:`a valid provider <xdc3-providers>`.

-------
Returns
-------

``Boolean``

-------
Example: Local Geth Node
-------

.. code-block:: javascript

    var Web3 = require('xdc3');
    var xdc3 = new Web3('http://localhost:8545');
    // or
    var xdc3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));

    // change provider
    xdc3.setProvider('ws://localhost:8546');
    // or
    xdc3.setProvider(new Web3.providers.WebsocketProvider('ws://localhost:8546'));

    // Using the IPC provider in node.js
    var net = require('net');
    var xdc3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path
    // or
    var xdc3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os path
    // on windows the path is: "\\\\.\\pipe\\geth.ipc"
    // on linux the path is: "/users/myuser/.ethereum/geth.ipc"

-------
Example: Remote Node Provider
-------

.. code-block:: javascript

    // Using a remote node provider, like Alchemy (https://www.alchemyapi.io/supernode), is simple.
    var Web3 = require('xdc3');
    var xdc3 = new Web3("https://eth-mainnet.alchemyapi.io/v2/your-api-key");


------------------------------------------------------------------------------

providers
=====================

.. code-block:: javascript

    xdc3.providers
    xdc3.eth.providers
    xdc3.shh.providers
    xdc3.bzz.providers
    ...

Contains the current available :ref:`providers <xdc3-providers>`.

----------
Value
----------

``Object`` with the following providers:

    - ``Object`` - ``HttpProvider``: The HTTP provider is **deprecated**, as it won't work for subscriptions.
    - ``Object`` - ``WebsocketProvider``: The Websocket provider is the standard for usage in legacy browsers.
    - ``Object`` - ``IpcProvider``: The IPC provider is used node.js dapps when running a local node. Gives the most secure connection.

-------
Example
-------

.. code-block:: javascript

    var Web3 = require('xdc3');
    // use the given Provider, e.g in Mist, or instantiate a new websocket provider
    var xdc3 = new Web3(Web3.givenProvider || 'ws://remotenode.com:8546');
    // or
    var xdc3 = new Web3(Web3.givenProvider || new Web3.providers.WebsocketProvider('ws://remotenode.com:8546'));

    // Using the IPC provider in node.js
    var net = require('net');

    var xdc3 = new Web3('/Users/myuser/Library/Ethereum/geth.ipc', net); // mac os path
    // or
    var xdc3 = new Web3(new Web3.providers.IpcProvider('/Users/myuser/Library/Ethereum/geth.ipc', net)); // mac os path
    // on windows the path is: "\\\\.\\pipe\\geth.ipc"
    // on linux the path is: "/users/myuser/.ethereum/geth.ipc"

-------------
Configuration
-------------

.. code-block:: javascript

    // ====
    // Http
    // ====

    var Web3HttpProvider = require('xdc3-providers-http');

    var options = {
        keepAlive: true,
        withCredentials: false,
        timeout: 20000, // ms
        headers: [
            {
                name: 'Access-Control-Allow-Origin',
                value: '*'
            },
            {
                ...
            }
        ],
        agent: {
            http: http.Agent(...),
            baseUrl: ''
        }
    };

    var provider = new Web3HttpProvider('http://localhost:8545', options);

    // ==========
    // Websockets
    // ==========

    var Web3WsProvider = require('xdc3-providers-ws');

    var options = {
        timeout: 30000, // ms

        // Useful for credentialed urls, e.g: ws://username:password@localhost:8546
        headers: {
          authorization: 'Basic username:password'
        },

        clientConfig: {
          // Useful if requests are large
          maxReceivedFrameSize: 100000000,   // bytes - default: 1MiB
          maxReceivedMessageSize: 100000000, // bytes - default: 8MiB

          // Useful to keep a connection alive
          keepalive: true,
          keepaliveInterval: 60000 // ms
        },

        // Enable auto reconnection
        reconnect: {
            auto: true,
            delay: 5000, // ms
            maxAttempts: 5,
            onTimeout: false
        }
    };

    var ws = new Web3WsProvider('ws://localhost:8546', options);


More information for the Http and Websocket provider modules can be found here:

    - `HttpProvider <https://github.com/ethereum/xdc3.js/tree/1.x/packages/xdc3-providers-http#usage>`_
    - `WebsocketProvider <https://github.com/ethereum/xdc3.js/tree/1.x/packages/xdc3-providers-ws#usage>`_

------------------------------------------------------------------------------

givenProvider
=====================

.. code-block:: javascript

    xdc3.givenProvider
    xdc3.eth.givenProvider
    xdc3.shh.givenProvider
    xdc3.bzz.givenProvider
    ...

When using xdc3.js in an Ethereum compatible browser, it will set with the current native provider by that browser.
Will return the given provider by the (browser) environment, otherwise ``null``.


-------
Returns
-------

``Object``: The given provider set or ``null``;

-------
Example
-------

.. code-block:: javascript
    xdc3.setProvider(xdc3.givenProvider || "ws://remotenode.com:8546");

------------------------------------------------------------------------------


currentProvider
=====================

.. code-block:: javascript

    xdc3.currentProvider
    xdc3.eth.currentProvider
    xdc3.shh.currentProvider
    xdc3.bzz.currentProvider
    ...

Will return the current provider, otherwise ``null``.


-------
Returns
-------

``Object``: The current provider set or ``null``.

-------
Example
-------

.. code-block:: javascript
    if(!xdc3.currentProvider) {
        xdc3.setProvider("http://localhost:8545");
    }

------------------------------------------------------------------------------

BatchRequest
=====================

.. code-block:: javascript

    new xdc3.BatchRequest()
    new xdc3.eth.BatchRequest()
    new xdc3.shh.BatchRequest()
    new xdc3.bzz.BatchRequest()

Class to create and execute batch requests.

----------
Parameters
----------

none

-------
Returns
-------

``Object``: With the following methods:

    - ``add(request)``: To add a request object to the batch call.
    - ``execute()``: Will execute the batch request.

-------
Example
-------

.. code-block:: javascript

    var contract = new xdc3.eth.Contract(abi, address);

    var batch = new xdc3.BatchRequest();
    batch.add(xdc3.eth.getBalance.request('0x0000000000000000000000000000000000000000', 'latest', callback));
    batch.add(contract.methods.balance(address).call.request({from: '0x0000000000000000000000000000000000000000'}, callback2));
    batch.execute();


------------------------------------------------------------------------------

extend
=====================

.. code-block:: javascript

    xdc3.extend(methods)
    xdc3.eth.extend(methods)
    xdc3.shh.extend(methods)
    xdc3.bzz.extend(methods)
    ...

Allows extending the xdc3 modules.

.. note:: You also have ``*.extend.formatters`` as additional formatter functions to be used for input and output formatting. Please see the `source file <https://github.com/ethereum/xdc3.js/blob/1.x/packages/xdc3-core-helpers/src/formatters.js>`_ for function details.

----------
Parameters
----------

1. ``methods`` - ``Object``: Extension object with array of methods description objects as follows:
    - ``property`` - ``String``: (optional) The name of the property to add to the module. If no property is set it will be added to the module directly.
    - ``methods`` - ``Array``: The array of method descriptions:
        - ``name`` - ``String``: Name of the method to add.
        - ``call`` - ``String``: The RPC method name.
        - ``params`` - ``Number``: (optional) The number of parameters for that function. Default 0.
        - ``inputFormatter`` - ``Array``: (optional) Array of inputformatter functions. Each array item responds to a function parameter, so if you want some parameters not to be formatted, add a ``null`` instead.
        - ``outputFormatter - ``Function``: (optional) Can be used to format the output of the method.


----------
Returns
----------

``Object``: The extended module.

-------
Example
-------

.. code-block:: javascript

    xdc3.extend({
        property: 'myModule',
        methods: [{
            name: 'getBalance',
            call: 'eth_getBalance',
            params: 2,
            inputFormatter: [xdc3.extend.formatters.inputAddressFormatter, xdc3.extend.formatters.inputDefaultBlockNumberFormatter],
            outputFormatter: xdc3.utils.hexToNumberString
        },{
            name: 'getGasPriceSuperFunction',
            call: 'eth_gasPriceSuper',
            params: 2,
            inputFormatter: [null, xdc3.utils.numberToHex]
        }]
    });

    xdc3.extend({
        methods: [{
            name: 'directCall',
            call: 'eth_callForFun',
        }]
    });

    console.log(xdc3);
    > Web3 {
        myModule: {
            getBalance: function(){},
            getGasPriceSuperFunction: function(){}
        },
        directCall: function(){},
        eth: Eth {...},
        bzz: Bzz {...},
        ...
    }


------------------------------------------------------------------------------
