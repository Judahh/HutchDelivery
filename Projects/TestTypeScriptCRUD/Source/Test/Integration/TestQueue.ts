/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />

var env = require('dotenv').load();
import Account = require("../../AzureStorage/Account");
import Queue = require("../../AzureStorage/Queue");
import chai = require("chai");
chai.should();

describe("TestQueue", function() {
	it("Deve retornar o AccountName " + process.env.AZURE_STORAGE_ACCOUNT, function () {
        var account = new Account.Account();
        account.name.should.be.equal(process.env.AZURE_STORAGE_ACCOUNT);
    });
	
    it("Deve retornar o AccountKey", function () {
        var account = new Account.Account();
        account.key.should.be.equal(process.env.AZURE_STORAGE_ACCESS_KEY);
    });
	
	it("Deve retornar o AccountURL", () => {
		var account = new Account.Account();
		account.uRL.should.be.equal("https://"+process.env.AZURE_STORAGE_ACCOUNT+".queue.core.windows.net/");
	})
	
	it("Deve retornar o AccountName " + process.env.AZURE_STORAGE_ACCOUNT, () => {
		var account = new Account.Account();
		var queue = new Queue.Queue(account);
		queue.account.name.should.be.equal(process.env.AZURE_STORAGE_ACCOUNT);
	})
	
	it("Deve retornar Ok ao criar fila", () => {
		var account = new Account.Account();
		var queue = new Queue.Queue(account);
		
		queue.createQueue("appqueue");
		var result = queue.error;
		result.should.be.equal(false);
	})
	
	it("Deve retornar name ao criar fila", () => {
		var account = new Account.Account();
		var queue = new Queue.Queue(account);
		queue.createQueue("appqueue");
		var name = queue.name;
		name.should.be.equal("appqueue");
	})
	
	it("Deve retornar ABCDEFG ao pegar nome da message", () => {
		var message = {
			id: 99,
  			name: "ABCDEFG"
		}
		message.name.should.be.equal("ABCDEFG");
	})
	
	it("Deve retornar Ok ao criar message", () => {
		var account = new Account.Account();
		var queue = new Queue.Queue(account);
		var message = {
			id: 99,
  			name: "ABCDEFG"
		}
		
		queue.createQueue("appqueue");
		queue.createMessage("message");
		var result = queue.error;
		result.should.be.equal(false);
	})
})