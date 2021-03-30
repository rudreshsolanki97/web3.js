
====
Web3
====

This is the main (or 'umbrella') class of the xdc3.js library.

.. code-block:: javascript

    var Web3 = require('xdc3');

    > Web3.utils
    > Web3.version
    > Web3.givenProvider
    > Web3.providers
    > Web3.modules

------------------------------------------------------------------------------

Web3.modules
=====================

.. code-block:: javascript

    Web3.modules

Will return an object with the classes of all major sub modules, to be able to instantiate them manually.

-------
Returns
-------

``Object``: A list of module constructors:
    - ``Eth`` - ``Constructor``: The Eth module for interacting with the Ethereum network (:ref:`xdc3.eth <eth>`).
    - ``Net`` - ``Constructor``: The Net module for interacting with network properties (:ref:`xdc3.eth.net <eth-net>`).
    - ``Personal`` - ``Constructor``: The Personal module for interacting with the Ethereum accounts (:ref:`xdc3.eth.personal <personal>`).
    - ``Shh`` - ``Constructor``: The Shh module for interacting with the whisper protocol (:ref:`xdc3.shh <shh>`).
    - ``Bzz`` - ``Constructor``: The Bzz module for interacting with the swarm network (:ref:`xdc3.bzz <bzz>`).

-------
Example
-------

.. code-block:: javascript

    Web3.modules
    > {
        Eth: Eth(provider),
        Net: Net(provider),
        Personal: Personal(provider),
        Shh: Shh(provider),
        Bzz: Bzz(provider),
    }


------------------------------------------------------------------------------

Web3 Instance
=============

The Web3 class is an umbrella package to house all Ethereum related modules.

.. code-block:: javascript

    var Web3 = require('xdc3');

    // "Web3.providers.givenProvider" will be set if in an Ethereum supported browser.
    var xdc3 = new Web3(Web3.givenProvider || 'ws://some.local-or-remote.node:8546');

    > xdc3.eth
    > xdc3.shh
    > xdc3.bzz
    > xdc3.utils
    > xdc3.version


------------------------------------------------------------------------------

version
============

Static accessible property of the Web3 class and property of the instance as well.

.. code-block:: javascript

    Web3.version
    xdc3.version

Contains the current package version of the xdc3.js library.

-------
Returns
-------

``String``: The current version.

-------
Example
-------

.. code-block:: javascript

    xdc3.version;
    > "1.2.3"



------------------------------------------------------------------------------


utils
=====================

Static accessible property of the Web3 class and property of the instance as well.

.. code-block:: javascript

    Web3.utils
    xdc3.utils

Utility functions are also exposes on the ``Web3`` class object directly.

See :ref:`xdc3.utils <utils>` for more.


------------------------------------------------------------------------------


.. include:: include_package-core.rst


------------------------------------------------------------------------------
