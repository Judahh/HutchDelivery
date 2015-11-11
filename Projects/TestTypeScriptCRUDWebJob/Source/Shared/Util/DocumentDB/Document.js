var Document = (function () {
    function Document(element, client) {
        this.organize(element);
        this._client = client;
    }
    Document.prototype.organize = function (element) {
        this._timestamp = element._ts;
        this._uRI = element._self;
        this._eTag = element._etag;
        this._attachmentsFeed = element._attachments;
    };
    Object.defineProperty(Document.prototype, "timestamp", {
        get: function () {
            return this._timestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "uRI", {
        get: function () {
            return this._uRI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "eTag", {
        get: function () {
            return this._eTag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "attachmentsFeed", {
        get: function () {
            return this._attachmentsFeed;
        },
        enumerable: true,
        configurable: true
    });
    return Document;
})();
exports.Document = Document;
