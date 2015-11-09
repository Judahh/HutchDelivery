var Document = (function () {
    function Document(timestamp, uRI, eTag, attachmentsFeed, client) {
        this._timestamp = timestamp;
        this._uRI = uRI;
        this._eTag = eTag;
        this._attachmentsFeed = attachmentsFeed;
        this._client = client;
    }
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
