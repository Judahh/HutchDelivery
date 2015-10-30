var Account = (function () {
    function Account(name, key, uRL) {
        this._name = name || 'iviaq';
        this._key = key || '2u8JLG0pkaUjmy287vE5Ldi+3klWLiRrJfaM+Wy3GTy5G4iwdp9esj4zUh8EX7Hc5RP0d0ao/7DAunRpOVkDcA==';
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
