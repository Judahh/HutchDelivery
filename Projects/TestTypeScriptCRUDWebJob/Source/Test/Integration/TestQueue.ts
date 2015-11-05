/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />

var env = require('dotenv').load();
import Account = require("../../Shared/Util/AzureStorage/Account");
import Queue = require("../../Shared/Util/AzureStorage/Queue");
import chai = require("chai");
chai.should();

describe("TestQueue", function() {
	// it("Deve retornar Ok ao criar message", () => {
	// 	var account = new Account.Account();
	// 	var queue = new Queue.Queue(account);
	// 	var message = {
	// 		"Id": 99,
  	// 		"Nome": "Lanister"
	// 	}
	// 	queue.createQueue(); 
	// 	queue.createMessage(JSON.stringify(message));
	// })
	
	// it("Deve remover message", () => {
	// 	var account = new Account.Account();
	// 	var queue = new Queue.Queue(account);
	// 	queue.createQueue("appqueue");
	// 	queue.getMessages(function(result){
	// 		for (var index = 0; index < result.length; index++) {
	// 			console.log("Get Message"+index+":"+result[index].messagetext);
	// 			queue.deleteMessage(result[index]);
	// 		}
	// 	});
	// })
})