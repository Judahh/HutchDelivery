var azure = require('azure-queue-node');
var Queue = (function () {
    function Queue(account) {
        this._account = account;
        azure.setDefaultClient({
            accountUrl: this._account.uRL,
            accountName: this._account.name,
            accountKey: this._account.key
        });
        this._account = account;
        this._queueSvc = azure.getDefaultClient();
    }
    Queue.prototype.createQueue = function (queueName) {
        this._queueSvc.createQueue(queueName, true, function (error, result, response) {
            if (!error) {
                this._queueName = queueName || 'appqueue';
                return true;
            }
        });
        return false;
    };
    Queue.prototype.createMessage = function (message) {
        this._queueSvc.putMessage(this._queueName, message, function (error, result) {
            if (!error) {
                return true;
            }
        });
        return false;
    };
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
