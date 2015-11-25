/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/node/node.d.ts' />

var env = require('dotenv').load();
import Account = require("../../Shared/Util/AzureStorage/Account");
import Queue = require("../../Shared/Util/AzureStorage/Queue");
import chai = require("chai");
chai.should();

describe("TestQueue", function() {
	// it("Deve retornar o AccountName " + process.env.AZURE_STORAGE_ACCOUNT, function () {
    //     var account = new Account.Account();
    //     account.name.should.be.equal(process.env.AZURE_STORAGE_ACCOUNT);
    // });
	
    // it("Deve retornar o AccountKey", function () {
    //     var account = new Account.Account();
    //     account.key.should.be.equal(process.env.AZURE_STORAGE_ACCESS_KEY);
    // });
	
	// it("Deve retornar o AccountURL", () => {
	// 	var account = new Account.Account();
	// 	account.uRL.should.be.equal("https://"+process.env.AZURE_STORAGE_ACCOUNT+".queue.core.windows.net/");
	// })
	
	// it("Deve retornar o AccountName " + process.env.AZURE_STORAGE_ACCOUNT, () => {
	// 	var account = new Account.Account();
	// 	var queue = new Queue.Queue(account);
	// 	queue.account.name.should.be.equal(process.env.AZURE_STORAGE_ACCOUNT);
	// })
})