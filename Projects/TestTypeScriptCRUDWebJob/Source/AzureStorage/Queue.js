var azure = require('azure-storage');
var env = require('dotenv').load();
var Queue = (function () {
    function Queue(account) {
        this._queueService = azure.createQueueService();
        this._account = account;
    }
    Queue.prototype.createQueue = function (name) {
        this._name = name || process.env.AZURE_STORAGE_QUEUE;
        this._queueService.createQueueIfNotExists(this._name, true, function (error) {
            if (error) {
                throw new Error(error);
            }
        });
    };
    Queue.prototype.createMessage = function (message) {
        this._queueService.createMessage(this._name, message, function (error) {
            if (error) {
                throw new Error(error);
            }
        });
    };
    Queue.prototype.getMessages = function (callback) {
        this._queueService.getMessages(this._name, function (error, result) {
            if (error) {
                throw new Error(error);
            }
            else {
                callback(result);
            }
        });
    };
    Queue.prototype.deleteMessage = function (message) {
        this._queueService.deleteMessage(this._name, message.messageid, message.popreceipt, function (error, response) {
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
    Object.defineProperty(Queue.prototype, "name", {
        get: function () {
            return this._name;
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
