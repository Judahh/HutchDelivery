var importList = require("../Collection/List");
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
                this._listDocument = new importList.List();
                result.forEach(function (element) {
                    var document = new document.Document(element._ts, element._self, element._etag, element._attachments, _this._client);
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
    Object.defineProperty(Collection.prototype, "documentsFeed", {
        get: function () {
            return this._documentsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "storedProceduresFeed", {
        get: function () {
            return this._storedProceduresFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "triggersFeed", {
        get: function () {
            return this._triggersFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "userDefinedFunctionsFeed", {
        get: function () {
            return this._userDefinedFunctionsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "conflictsFeed", {
        get: function () {
            return this._conflictsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "indexingPolicy", {
        get: function () {
            return this._indexingPolicy;
        },
        enumerable: true,
        configurable: true
    });
    return Collection;
})();
exports.Collection = Collection;
