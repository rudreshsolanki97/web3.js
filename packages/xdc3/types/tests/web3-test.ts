/*
    This file is part of xdc3.js.
    xdc3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    xdc3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.
    You should have received a copy of the GNU Lesser General Public License
    along with xdc3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file xdc3-test.ts
 * @author Josh Stevens <joshstevens19@hotmail.co.uk>, Samuel Furter <samuel@ethereum.org>
 * @date 2018
 */

import Web3 from 'xdc3';
import * as net from 'net';
import { AbstractProvider, RequestArguments } from 'xdc3-core';
import { JsonRpcPayload, JsonRpcResponse } from 'xdc3-core-helpers';

// $ExpectType Utils
Web3.utils;

// $ExpectType string
Web3.version;

// $ExpectType Modules
Web3.modules;

// $ExpectType Providers
Web3.providers;

// $ExpectType any
Web3.givenProvider;

// $ExpectType Web3
const web3_empty = new Web3();

// $ExpectType Web3
let xdc3 = new Web3('https://localhost:5000/');

// $ExpectType provider
xdc3.currentProvider;

// $ExpectType any
xdc3.extend({property: 'test', methods: [{name: 'method', call: 'method'}]});

// $ExpectType any
xdc3.givenProvider;

// $ExpectType string | null
xdc3.defaultAccount;

// $ExpectType string | number
xdc3.defaultBlock;

// $ExpectType boolean
xdc3.setProvider('https://localhost:2100');

// $ExpectType BatchRequest
new xdc3.BatchRequest();

// $ExpectType Utils
xdc3.utils;

// $ExpectType string
xdc3.version;

// $ExpectType Eth
xdc3.eth;

// $ExpectType Shh
xdc3.shh;

// $ExpectType Bzz
xdc3.bzz;

// $ExpectType Socket
const netSocket = new net.Socket();

// $ExpectType Web3
xdc3 = new Web3('https://localhost:5000/', netSocket);

// $ExpectType Web3
xdc3 = new Web3();

class CustomProvider1 implements AbstractProvider {
    sendAsync(payload: JsonRpcPayload, callback: (error: Error | null, result?: JsonRpcResponse) => void) {}
}

// $ExpectType Web3
xdc3 = new Web3(new CustomProvider1());

class CustomProvider2 implements AbstractProvider {
    send(payload: JsonRpcPayload, callback: (error: Error | null, result?: JsonRpcResponse) => void) {}
    sendAsync(payload: JsonRpcPayload, callback: (error: Error | null, result?: JsonRpcResponse) => void) {}
}

// $ExpectType Web3
xdc3 = new Web3(new CustomProvider2());

class CustomProvider3 implements AbstractProvider {
    async request(args: RequestArguments) {}
    sendAsync(payload: JsonRpcPayload, callback: (error: Error | null, result?: JsonRpcResponse) => void) {}
}

// $ExpectType Web3
xdc3 = new Web3(new CustomProvider3());
