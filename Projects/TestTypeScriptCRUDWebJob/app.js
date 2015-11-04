var Account = require("Source/AzureStorage/Account");
var Queue = require("Source/AzureStorage/Queue");
var chai = require("chai");
chai.should();
var account = new Account.Account();
var queue = new Queue.Queue(account);
queue.createQueue();
queue.getMessages(function (result) {
    for (var index = 0; index < result.length; index++) {
        console.log("Get Message" + index + ":" + result[index].messagetext);
        queue.deleteMessage(result[index]);
    }
});
