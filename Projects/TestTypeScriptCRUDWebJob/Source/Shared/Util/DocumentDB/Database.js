var list = require("../Collection/List");
var Database = (function () {
    function Database(name, identification, timestamp, uRI, eTag, collectionsFeed, usersFeed, client) {
        this._name = name;
        this._identification = identification;
        this._timestamp = timestamp;
        this._uRI = uRI;
        this._eTag = eTag;
        this._collectionsFeed = collectionsFeed;
        this._usersFeed = usersFeed;
        this._client = client;
    }
    Database.prototype.getListCollection = function (callback) {
        this._client.queryCollections(this._uRI, "SELECT * FROM c").toArray(function (error, result) {
            var _this = this;
            if (error) {
                console.log("Error:");
                console.log(error);
                throw new Error("Error");
            }
            else {
                this._listCollection = new list.List();
                result.forEach(function (element) {
                    var collection = new collection.Collection(element.id, element._rid, element._ts, element._self, element._etag, element._docs, element._sprocs, element._triggers, element._udfs, element._conflicts, element.indexingPolicy, _this._client);
                    _this._listCollection.add(collection);
                });
                callback(this._listCollection);
            }
        });
    };
    Object.defineProperty(Database.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "identification", {
        get: function () {
            return this._identification;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "uRI", {
        get: function () {
            return this._uRI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "eTag", {
        get: function () {
            return this._eTag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "collectionsFeed", {
        get: function () {
            return this._collectionsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "usersFeed", {
        get: function () {
            return this._usersFeed;
        },
        enumerable: true,
        configurable: true
    });
    return Database;
})();
exports.Database = Database;
