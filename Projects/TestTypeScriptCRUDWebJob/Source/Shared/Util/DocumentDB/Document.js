var Document = (function () {
    function Document(element, client) {
        this.organize(element);
        this._client = client;
    }
    Document.prototype.organize = function (element) {
        this._stringTimestamp = element._ts;
        this._stringURI = element._self;
        this._stringETag = element._etag;
        this._stringAttachmentsFeed = element._attachments;
    };
    Object.defineProperty(Document.prototype, "stringTimestamp", {
        get: function () {
            return this._stringTimestamp;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "stringURI", {
        get: function () {
            return this._stringURI;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "stringETag", {
        get: function () {
            return this._stringETag;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Document.prototype, "stringAttachmentsFeed", {
        get: function () {
            return this._stringAttachmentsFeed;
        },
        enumerable: true,
        configurable: true
    });
    return Document;
})();
exports.Document = Document;
