var importList = require("../Collection/List");
var Database = (function () {
    function Database(element, client) {
        this.organize(element);
        this._client = client;
    }
    Database.prototype.organize = function (element) {
        this._stringName = element.id;
        this._stringIdentification = element._rid;
        this._stringTimestamp = element._ts;
        this._stringURI = element._self;
        this._stringETag = element._etag;
        this._stringCollectionsFeed = element._colls;
        this._stringUsersFeed = element._users;
    };
    Database.prototype.getListCollection = function (callback) {
        this._client.queryCollections(this._stringURI, "SELECT * FROM c").toArray(function (error, result) {
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
            return this._stringName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "identification", {
        get: function () {
            return this._stringIdentification;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "timestamp", {
        get: function () {
            return this._stringTimestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "uRI", {
        get: function () {
            return this._stringURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "eTag", {
        get: function () {
            return this._stringETag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "collectionsFeed", {
        get: function () {
            return this._stringCollectionsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Database.prototype, "usersFeed", {
        get: function () {
            return this._stringUsersFeed;
        },
        enumerable: true,
        configurable: true
    });
    return Database;
})();
exports.Database = Database;
