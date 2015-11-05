var env = require('dotenv').load();
var Account = (function () {
    function Account(name, key, uRL) {
        this._name = name || process.env.AZURE_STORAGE_ACCOUNT;
        this._key = key || process.env.AZURE_STORAGE_ACCESS_KEY;
        this._uRL = uRL || 'https://' + this._name + '.queue.core.windows.net/';
    }
    Object.defineProperty(Account.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountName", {
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "key", {
        get: function () {
            return this._key;
        },
        set: function (key) {
            this._key = key;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "uRL", {
        get: function () {
            return this._uRL;
        },
        set: function (uRL) {
            this._uRL = uRL;
        },
        enumerable: true,
        configurable: true
    });
    return Account;
})();
exports.Account = Account;
