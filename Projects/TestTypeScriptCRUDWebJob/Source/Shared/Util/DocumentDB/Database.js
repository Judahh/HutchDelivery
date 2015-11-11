var importList = require("../Collection/List");
var Database = (function () {
    function Database(element, client) {
        this.organize(element);
        this._client = client;
    }
    Database.prototype.organize = function (element) {
        this._name = element.id;
        this._identification = element._rid;
        this._timestamp = element._ts;
        this._uRI = element._self;
        this._eTag = element._etag;
        this._collectionsFeed = element._colls;
        this._usersFeed = element._users;
    };
    Database.prototype.getListCollection = function (callback) {
        this._client.queryCollections(this._uRI, "SELECT * FROM c").toArray(function (error, result) {
            var _this = this;
            if (error) {
                console.log("Error:");
                console.log(error);
                throw new Error("Error");
            }
            else {
                this._listCollection = new importList.List();
                result.forEach(function (element) {
                    var collection = new collection.Collection(element, _this._client);
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
