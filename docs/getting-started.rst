
===============
Getting Started
===============

The xdc3.js library is a collection of modules that contain functionality for the ethereum ecosystem.

- ``xdc3-eth`` is for the ethereum blockchain and smart contracts.
- ``xdc3-shh`` is for the whisper protocol, to communicate p2p and broadcast.
- ``xdc3-bzz`` is for the swarm protocol, the decentralized file storage.
- ``xdc3-utils`` contains useful helper functions for Dapp developers.


.. _adding-xdc3:

Adding xdc3.js
==============

.. index:: npm
.. index:: yarn

First you need to get xdc3.js into your project. This can be done using the following methods:

- npm: ``npm install xdc3``
- yarn: ``yarn add xdc3``
- pure js: link the ``dist/xdc3.min.js``

After that you need to create a xdc3 instance and set a provider.

Most Ethereum-supported browsers like MetaMask have an `EIP-1193 <https://eips.ethereum.org/EIPS/eip-1193>`_ compliant provider available at ``window.ethereum``.

For xdc3.js, check ``Web3.givenProvider``.

If this property is ``null`` you should connect to a remote/local node.

.. code-block:: javascript

    // In Node.js use: const Web3 = require('xdc3');

    let xdc3 = new Web3(Web3.givenProvider || "ws://localhost:8545");

That's it! now you can use the ``xdc3`` object.
