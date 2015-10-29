/// <reference path='../../typings/mocha/mocha.d.ts' />
/// <reference path='../../typings/chai/chai.d.ts' />
var Account = require("../AzureStorage/Account");
var Queue = require("../AzureStorage/Queue");
var chai = require("chai");
chai.should();
describe("TestQueue", function () {
    it("Deve retornar o AccountName iviaq", function () {
        var account = new Account.Account();
        account.name.should.be.equal("iviaq");
    });
    it("Deve retornar o AccountKey", function () {
        var account = new Account.Account();
        account.key.should.be.equal("2u8JLG0pkaUjmy287vE5Ldi+3klWLiRrJfaM+Wy3GTy5G4iwdp9esj4zUh8EX7Hc5RP0d0ao/7DAunRpOVkDcA==");
    });
    it("Deve retornar o AccountURL", function () {
        var account = new Account.Account();
        account.uRL.should.be.equal("http://iviaq.queue.core.windows.net/");
    });
    it("Deve retornar o AccountName iviaq", function () {
        var account = new Account.Account();
        var queue = new Queue.Queue(account);
        queue.account.name.should.be.equal("iviaq");
    });
    it("Deve retornar Ok ao criar fila", function () {
        var account = new Account.Account();
        var queue = new Queue.Queue(account);
        var result = queue.createQueue();
        result.should.be.equal(true);
    });
    it("Deve retornar Ok ao criar message", function () {
        var account = new Account.Account();
        var queue = new Queue.Queue(account);
        var message = {
            id: 99,
            name: 'ABCDEFG'
        };
        var result = queue.createMessage(message);
        result.should.be.equal(true);
    });
});
