
.. _net-getid:

getId
=========

.. code-block:: javascript

    xdc3.eth.net.getId([callback])
    xdc3.bzz.net.getId([callback])
    xdc3.shh.net.getId([callback])

Gets the current network ID.

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns ``Number``: The network ID.

-------
Example
-------

.. code-block:: javascript

    xdc3.eth.net.getId()
    .then(console.log);
    > 1

------------------------------------------------------------------------------


isListening
=========

.. code-block:: javascript

    xdc3.eth.net.isListening([callback])
    xdc3.bzz.net.isListening([callback])
    xdc3.shh.net.isListening([callback])

Checks if the node is listening for peers.

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns ``Boolean``

-------
Example
-------

.. code-block:: javascript

    xdc3.eth.net.isListening()
    .then(console.log);
    > true

------------------------------------------------------------------------------

getPeerCount
=========

.. code-block:: javascript

    xdc3.eth.net.getPeerCount([callback])
    xdc3.bzz.net.getPeerCount([callback])
    xdc3.shh.net.getPeerCount([callback])

Get the number of peers connected to.

----------
Parameters
----------

none

-------
Returns
-------

``Promise`` returns ``Number``

-------
Example
-------

.. code-block:: javascript

    xdc3.eth.net.getPeerCount()
    .then(console.log);
    > 25
