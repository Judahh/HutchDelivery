var importList = require("../Collection/List");
var Collection = (function () {
    function Collection(element, client) {
        this.organize(element);
        this._client = client;
    }
    Collection.prototype.organize = function (element) {
        this._stringName = element.id;
        this._stringIdentification = element._rid;
        this._stringTimestamp = element._ts;
        this._stringURI = element._self;
        this._stringETag = element._etag;
        this._stringDocumentsFeed = element._docs;
        this._stringStoredProceduresFeed = element._sprocs;
        this._stringTriggersFeed = element._triggers;
        this._stringUserDefinedFunctionsFeed = element._udfs;
        this._stringConflictsFeed = element._conflicts;
        this._indexingPolicy = element.indexingPolicy;
    };
    Collection.prototype.getListDocument = function (callback) {
        this._client.queryDocuments(this._stringURI, "SELECT * FROM c").toArray(function (error, result) {
            var _this = this;
            if (error) {
                console.log("Error:");
                console.log(error);
                throw new Error("Error");
            }
            else {
                this._listDocument = new importList.List();
                result.forEach(function (element) {
                    var document = new document.Document(element, _this._client);
                    _this._listCollection.add(document);
                });
                callback(this._listCollection);
            }
        });
    };
    Object.defineProperty(Collection.prototype, "stringName", {
        get: function () {
            return this._stringName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringIdentification", {
        get: function () {
            return this._stringIdentification;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringTimestamp", {
        get: function () {
            return this._stringTimestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringURI", {
        get: function () {
            return this._stringURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringETag", {
        get: function () {
            return this._stringETag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringDocumentsFeed", {
        get: function () {
            return this._stringDocumentsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringStoredProceduresFeed", {
        get: function () {
            return this._stringStoredProceduresFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringTriggersFeed", {
        get: function () {
            return this._stringTriggersFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringUserDefinedFunctionsFeed", {
        get: function () {
            return this._stringUserDefinedFunctionsFeed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Collection.prototype, "stringConflictsFeed", {
        get: function () {
            return this._stringConflictsFeed;
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
