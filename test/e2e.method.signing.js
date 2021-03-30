var assert = require('assert');
var EJSCommon = require('ethereumjs-common');
var EJSTx = require('ethereumjs-tx');
var Basic = require('./sources/Basic');
var utils = require('./helpers/test.utils');
var Web3 = utils.getWeb3();

describe('transaction and message signing [ @E2E ]', function() {
    let xdc3;
    let accounts;
    let wallet;
    let basic;
    let instance;

    const basicOptions = {
        data: Basic.bytecode,
        gasPrice: '1',
        gas: 4000000
    };

    before(async function(){
        xdc3 = new Web3('http://localhost:8545');
        accounts = await xdc3.eth.getAccounts();

        // Create a funded account w/ a private key
        wallet = xdc3.eth.accounts.wallet.create(10);

        await xdc3.eth.sendTransaction({
            from: accounts[0],
            to: wallet[0].address,
            value: xdc3.utils.toWei('50', 'ether'),
        });

        basic = new xdc3.eth.Contract(Basic.abi, basicOptions);
        instance = await basic.deploy().send({from: accounts[0]});
    });

    it('sendSignedTransaction (with eth.signTransaction)', async function(){
        // ganache does not support eth_signTransaction
        if (process.env.GANACHE || global.window ) return

        const destination = wallet[1].address;
        const source = accounts[0]; // Unlocked geth-dev account

        const txCount = await xdc3.eth.getTransactionCount(source);

        const rawTx = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            from:     source,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei'))
        };

        const signed = await xdc3.eth.signTransaction(rawTx);
        const receipt = await xdc3.eth.sendSignedTransaction(signed.raw);

        assert(receipt.status === true);
    });

    it('sendSignedTransaction (accounts.signTransaction with signing options)', async function(){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txCount = await xdc3.eth.getTransactionCount(source);
        const networkId = await xdc3.eth.net.getId();
        const chainId = await xdc3.eth.getChainId();


        const customCommon = {
            baseChain: 'mainnet',
            customChain: {
                name: 'custom-network',
                networkId: networkId,
                chainId: chainId,
            },
            harfork: 'petersburg',
        };

        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
            common: customCommon
        };

        const signed = await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);
        const receipt = await xdc3.eth.sendSignedTransaction(signed.rawTransaction);

        assert(receipt.status === true);
    });

    it('sendSignedTransaction (accounts.signTransaction / without signing options)', async function(){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txCount = await xdc3.eth.getTransactionCount(source);

        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
        };

        const signed = await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);
        const receipt = await xdc3.eth.sendSignedTransaction(signed.rawTransaction);

        assert(receipt.status === true);
    });

    it('accounts.signTransaction, (with callback, nonce not specified)', function(done){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txObject = {
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
        };

        xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey, async function(err, signed){
            const receipt = await xdc3.eth.sendSignedTransaction(signed.rawTransaction);
            assert(receipt.status === true);
            done();
        });
    });

    it('accounts.signTransaction errors when common, chain and hardfork all defined', async function(){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txCount = await xdc3.eth.getTransactionCount(source);

        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
            chain: "ropsten",
            common: {},
            hardfork: "istanbul"
        };

        try {
            await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);
            assert.fail()
        } catch (err) {
            assert(err.message.includes('common object or the chain and hardfork'));
        }
    });

    it('accounts.signTransaction errors when chain specified without hardfork', async function(){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txCount = await xdc3.eth.getTransactionCount(source);

        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
            chain: "ropsten"
        };

        try {
            await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);
            assert.fail()
        } catch (err) {
            assert(err.message.includes('both values must be defined'));
        }
    });

    it('accounts.signTransaction errors when hardfork specified without chain', async function(){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txCount = await xdc3.eth.getTransactionCount(source);

        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(21000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
            hardfork: "istanbul"
        };

        try {
            await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);
            assert.fail()
        } catch (err) {
            assert(err.message.includes('both values must be defined'));
        }
    });

    it('accounts.signTransaction errors when tx signing is invalid', async function(){
        const source = wallet[0].address;
        const destination = wallet[1].address;

        const txCount = await xdc3.eth.getTransactionCount(source);

        // Using gas === 0 / ethereumjs-tx checks this wrt common baseFee
        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       destination,
            value:    xdc3.utils.toHex(xdc3.utils.toWei('0.1', 'ether')),
            gasLimit: xdc3.utils.toHex(0),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
            hardfork: "istanbul",
            chain:    "ropsten",
        };

        try {
            await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);
            assert.fail()
        } catch (err) {
            assert(err.message.includes('gas limit is too low'));
        }
    })

    it('accounts.signTransaction errors when no transaction is passed', async function(){
        try {
            await xdc3.eth.accounts.signTransaction(undefined, wallet[0].privateKey);
            assert.fail()
        } catch (err) {
            assert(err.message.includes('No transaction object'));
        }
    });

    it('wallet executes method call using chain & hardfork options', async function(){
        // Geth --dev errors with 'invalid sender' when using these options.
        // Requires a custom common configuration (see next test). Ganache doesn't care
        if(!process.env.GANACHE) return;

        basic = new xdc3.eth.Contract(Basic.abi, basicOptions);
        basic.defaultChain = 'mainnet';
        basic.defaultHardfork = 'istanbul';

        instance = await basic
            .deploy()
            .send({from: wallet[0].address});

        const receipt = await instance
            .methods
            .setValue('1')
            .send({from: wallet[0].address});

        assert(receipt.status === true);
        assert(xdc3.utils.isHexStrict(receipt.transactionHash));
    });

    it('wallet executes method call using customCommon option', async function(){
        const networkId = await xdc3.eth.net.getId();
        const chainId = await xdc3.eth.getChainId();

        const customCommon = {
            baseChain: 'mainnet',
            customChain: {
                name: 'custom-network',
                networkId: networkId,
                chainId: chainId,
            },
            harfork: 'istanbul',
        };

        basic = new xdc3.eth.Contract(Basic.abi, basicOptions);
        basic.defaultCommon = customCommon;

        instance = await basic
            .deploy()
            .send({from: wallet[0].address});

        const receipt = await instance
            .methods
            .setValue('1')
            .send({from: wallet[0].address});

        assert(receipt.status === true);
        assert(xdc3.utils.isHexStrict(receipt.transactionHash));
    });

    it('transactions sent with wallet throws error correctly (with receipt)', async function(){
        const data = instance
            .methods
            .reverts()
            .encodeABI();

        const tx = {
            from: wallet[0],
            to: instance.options.address,
            data: data,
            gasPrice: '1',
            gas: 4000000
        }

        try {
            await xdc3.eth.sendTransaction(tx);
            assert.fail();
        } catch(err){
            var receipt = utils.extractReceipt(err.message);

            assert(err.message.includes('revert'))
            assert(receipt.status === false);
        }
    });

    it('sendSignedTransaction reverts with reason', async function(){
        const data = instance
            .methods
            .reverts()
            .encodeABI();

        const source = wallet[0].address;
        const txCount = await xdc3.eth.getTransactionCount(source);

        const txObject = {
            nonce:    xdc3.utils.toHex(txCount),
            to:       instance.options.address,
            gasLimit: xdc3.utils.toHex(400000),
            gasPrice: xdc3.utils.toHex(xdc3.utils.toWei('10', 'gwei')),
            data: data
        };

        const signed = await xdc3.eth.accounts.signTransaction(txObject, wallet[0].privateKey);

        xdc3.eth.handleRevert = true;
        try {
            await xdc3.eth.sendSignedTransaction(signed.rawTransaction);
            assert.fail();
        } catch(err){
            assert.equal(err.receipt.status, false);
            assert.equal(err.reason, "REVERTED WITH REVERT");
        }
    });

    it('transactions sent with wallet error correctly (OOG)', function(done){
        const data = instance
            .methods
            .reverts()
            .encodeABI();

        const tx = {
            from: wallet[0],
            to: instance.options.address,
            data: data,
            gasPrice: '1',
            gas: 10
        }

        xdc3
            .eth
            .sendTransaction(tx)
            .on('error', function(err){
                assert(err.message.includes('gas'))
                done();
            })
    });

    it('eth.personal.sign', async function(){
        // ganache does not support eth_sign
        if (process.env.GANACHE || global.window ) return

        const message = 'hello';

        const signature = await xdc3.eth.personal.sign(
            message,
            accounts[1],            // Unlocked geth-dev acct
            "left-hand-of-darkness" // Default password at geth-dev
        );

        const recovered = await xdc3.eth.personal.ecRecover(message, signature);
        assert.equal(accounts[1].toLowerCase(), recovered.toLowerCase());
    });

    it('eth.accounts.sign', async function(){
        if (process.env.GANACHE || global.window ) return

        const message = 'hello';

        const signed = xdc3.eth.accounts.sign(message, wallet[0].privateKey);
        const recovered = await xdc3.eth.personal.ecRecover(message, signed.signature);
        assert.equal(wallet[0].address.toLowerCase(), recovered.toLowerCase());
    })

    // Smoke test to validate browserify's buffer polyfills (feross/buffer@5)
    // A companion regression test for Webpack & feross/buffer@4.9.2 exists at:
    // test/eth.accounts.webpack.js
    it("encrypt then decrypt wallet", function(done) {
        this.timeout(20000);
        try {
            const password = "qwerty";
            const addressFromWallet = wallet[0].address;

            const keystore = wallet.encrypt(password);

            // Wallet created w/ 10 accounts in before block
            assert.equal(keystore.length, 10);

            wallet.decrypt(keystore, password);
            assert.equal(wallet.length, 10);

            const addressFromKeystore = wallet[0].address;
            assert.equal(addressFromKeystore, addressFromWallet);
            done()
        } catch(error) {
            done(error)
        }
    });
});

