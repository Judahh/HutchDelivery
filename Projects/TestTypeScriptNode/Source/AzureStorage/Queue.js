require('dotenv').load();
var azure = require('azure-storage');
var Queue = (function () {
    function Queue(account) {
        this._error = true;
        this._account = account;
        this._queueService = azure.createQueueService();
    }
    Queue.prototype.createQueue = function (name) {
        this._name = name;
        this._queueService.createQueueIfNotExists(this._name, true, function (error, result, response) {
            this._name = "error";
            if (!error) {
            }
            this._error = error;
        });
    };
    Queue.prototype.createMessage = function (message) {
        this._queueService.createMessage(this._name, message, function (error, result) {
            if (!error) {
            }
            this._error = error;
        });
    };
    Object.defineProperty(Queue.prototype, "error", {
        get: function () {
            return this._error;
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
