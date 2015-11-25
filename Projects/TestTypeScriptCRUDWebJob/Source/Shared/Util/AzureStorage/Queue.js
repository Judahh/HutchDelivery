var azure = require('azure-storage');
var env = require('dotenv').load();
var Queue = (function () {
    function Queue(account) {
        this._queueService = azure.createQueueService();
        this._account = account;
    }
    Queue.prototype.createQueue = function (stringName) {
        this._stringName = stringName || process.env.AZURE_STORAGE_QUEUE;
        this._queueService.createQueueIfNotExists(this._stringName, true, function (error) {
            if (error) {
                throw new Error(error);
            }
        });
    };
    Queue.prototype.createMessage = function (message) {
        this._queueService.createMessage(this._stringName, message, function (error) {
            if (error) {
                throw new Error(error);
            }
        });
    };
    Queue.prototype.getMessages = function (callback) {
        this._queueService.getMessages(this._stringName, function (error, result) {
            if (error) {
                throw new Error(error);
            }
            else {
                callback(result);
            }
        });
    };
    Queue.prototype.deleteMessage = function (message) {
        this._queueService.deleteMessage(this._stringName, message.messageid, message.popreceipt, function (error, response) {
            if (error) {
                throw new Error(error);
            }
        });
    };
    Object.defineProperty(Queue.prototype, "queueService", {
        get: function () {
            return this._queueService;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "stringName", {
        get: function () {
            return this._stringName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Queue.prototype, "account", {
        get: function () {
            return this._account;
        },
        set: function (account) {
            this._account = account;
        },
        enumerable: true,
        configurable: true
    });
    return Queue;
})();
exports.Queue = Queue;
