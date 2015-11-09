var list = require("../Collection/List");
var Collection = (function () {
    function Collection(name, identification, timestamp, uRI, eTag, documentsFeed, storedProceduresFeed, triggersFeed, userDefinedFunctionsFeed, conflictsFeed, indexingPolicy, client) {
        this._name = name;
        this._identification = identification;
        this._timestamp = timestamp;
        this._uRI = uRI;
        this._eTag = eTag;
        this._documentsFeed = documentsFeed;
        this._storedProceduresFeed = storedProceduresFeed;
        this._triggersFeed = triggersFeed;
        this._userDefinedFunctionsFeed = userDefinedFunctionsFeed;
        this._conflictsFeed = conflictsFeed;
        this._indexingPolicy = indexingPolicy;
        this._client = client;
    }
    Collection.prototype.getListDocument = function (callback) {
        this._client.queryDocuments(this._uRI, "SELECT * FROM c").toArray(function (error, result) {
            var _this = this;
            if (error) {
                console.log("Error:");
                console.log(error);
                throw new Error("Error");
            }
            else {
                this._listDocument = new list.List();
                result.forEach(function (element) {
                    var document = new document.Document(element.id, element._rid, element._ts, element._self, element._etag, element._colls, element._users, _this._client);
                    _this._listCollection.add(document);
                });
                callback(this._listCollection);
            }
        });
    };
    Object.defineProperty(Collection.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "identification", {
        get: function () {
            return this._identification;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "uRI", {
        get: function () {
            return this._uRI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "eTag", {
        get: function () {
            return this._eTag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "collectionsFeed", {
        get: function () {
            return this._collectionsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "usersFeed", {
        get: function () {
            return this._usersFeed;
        },
        enumerable: true,
        configurable: true
    });
    return Collection;
})();
exports.Collection = Collection;
