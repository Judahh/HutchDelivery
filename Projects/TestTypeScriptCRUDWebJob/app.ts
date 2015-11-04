/// <reference path="typings/documentdb/documentdb.d.ts" />

import DocumentDB = require('documentdb');
import Account = require("Source/AzureStorage/Account");
import Queue = require("Source/AzureStorage/Queue");

var docDBClientWrite = new DocumentDB.DocumentClient('host', { masterKey: 'masterKey' });
var docDBClientRead = new DocumentDB.DocumentClient('host', { masterKey: 'masterKey' });

var account = new Account.Account();
var queue = new Queue.Queue(account);
queue.createQueue();
queue.getMessages(function(result){
	for (var index = 0; index < result.length; index++) {
		console.log("Get Message"+index+":"+result[index].messagetext);
		queue.deleteMessage(result[index]);
	}
});