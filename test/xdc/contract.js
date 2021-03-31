var chai = require("chai");

const provider = "wss://ws.xinfin.network";

const abi = require("./contracts/contract.json");
const addr = "xdc07318f7651eeb9ba05b9ba6ccb9e195c23b72a51";

describe("xdc3.eth.contract", function () {
    it("xdc3.eth.contract - pastLogs", function () {
        return new Promise((resolve, reject) => {
            const Xdc3 = require("../../packages/xdc3");
            const Utils = require("../../packages/xdc3-utils");

            const xdc3 = new Xdc3(
                new Xdc3.providers.WebsocketProvider(provider)
            );

            const contractInst = new xdc3.eth.Contract(abi, addr);
            contractInst.getPastEvents(
                "allEvents",
                { fromBlock: 0, toBlock: "latest" },
                function (error, events) {
                    if (error) reject();
                    for (let event of events) {
                        if (!Utils.isXdcAddress(event.address.toLowerCase()))
                            reject(`${event.address} is invalid`);
                    }
                    resolve();
                }
            );
        });
    }).timeout(300000);
});
