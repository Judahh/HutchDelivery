var env = require('dotenv').load();
var Account = (function () {
    function Account(stringName, stringKey, stringURL) {
        this._stringName = stringName || process.env.AZURE_STORAGE_ACCOUNT;
        this._stringKey = stringKey || process.env.AZURE_STORAGE_ACCESS_KEY;
        this._stringURL = stringURL || 'https://' + this._stringName + '.queue.core.windows.net/';
    }
    Object.defineProperty(Account.prototype, "stringName", {
        get: function () {
            return this._stringName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "accountName", {
        set: function (stringName) {
            this._stringName = stringName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "stringKey", {
        get: function () {
            return this._stringKey;
        },
        set: function (stringKey) {
            this._stringKey = stringKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "stringURL", {
        get: function () {
            return this._stringURL;
        },
        set: function (stringURL) {
            this._stringURL = stringURL;
        },
        enumerable: true,
        configurable: true
    });
    return Account;
})();
exports.Account = Account;
