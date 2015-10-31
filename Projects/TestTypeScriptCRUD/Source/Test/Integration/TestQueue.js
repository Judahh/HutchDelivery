/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
var env = require('dotenv').load();
var Account = require("../../AzureStorage/Account");
var Queue = require("../../AzureStorage/Queue");
var chai = require("chai");
chai.should();
describe("TestQueue", function () {
    it("Deve retornar o AccountName " + process.env.AZURE_STORAGE_ACCOUNT, function () {
        var account = new Account.Account();
        account.name.should.be.equal(process.env.AZURE_STORAGE_ACCOUNT);
    });
    it("Deve retornar o AccountKey", function () {
        var account = new Account.Account();
        account.key.should.be.equal(process.env.AZURE_STORAGE_ACCESS_KEY);
    });
    it("Deve retornar o AccountURL", function () {
        var account = new Account.Account();
        account.uRL.should.be.equal("https://" + process.env.AZURE_STORAGE_ACCOUNT + ".queue.core.windows.net/");
    });
    it("Deve retornar o AccountName " + process.env.AZURE_STORAGE_ACCOUNT, function () {
        var account = new Account.Account();
        var queue = new Queue.Queue(account);
        queue.account.name.should.be.equal(process.env.AZURE_STORAGE_ACCOUNT);
    });
    it("Deve retornar Ok ao criar message", function () {
        var account = new Account.Account();
        var queue = new Queue.Queue(account);
        var message = {
            "id": "99",
            "name": "ABCDEFG"
        };
        queue.createQueue();
        queue.createMessage(JSON.stringify(message));
    });
    it("Deve remover message", function () {
        var account = new Account.Account();
        var queue = new Queue.Queue(account);
        queue.createQueue("appqueue");
        queue.getMessages(function (result) {
            for (var index = 0; index < result.length; index++) {
                console.log("Get Message" + index + ":" + result[index].messagetext);
                queue.deleteMessage(result[index]);
            }
        });
    });
});
