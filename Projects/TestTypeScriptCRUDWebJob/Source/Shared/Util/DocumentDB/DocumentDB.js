/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
var list = require("../Collection/List");
var documentDB = require('documentdb');
var env = require('dotenv').load();
var DocumentDB = (function () {
    function DocumentDB(endPoint, authKey) {
        this._endPoint = name || process.env.AZURE_DOCUMENTDB_ENDPOINT;
        this._authKey = name || process.env.AZURE_DOCUMENTDB_AUTH_KEY;
        this._client = new documentDB.DocumentClient(this._endPoint, { masterKey: this._authKey });
    }
    DocumentDB.prototype.getListDatabase = function (callback) {
        this._client.queryDatabases("SELECT * FROM d").toArray(function (error, result) {
            var _this = this;
            if (error) {
                console.log("Error:");
                console.log(error);
                throw new Error("Error");
            }
            else {
                this._listDatabase = new list.List();
                result.forEach(function (element) {
                    var database = new database.Database(element.id, element._rid, element._ts, element._self, element._etag, element._colls, element._users, _this._client);
                    _this._listDatabase.add(database);
                });
                callback(this._listDatabase);
            }
        });
    };
    Object.defineProperty(DocumentDB.prototype, "endPoint", {
        get: function () {
            return this._endPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentDB.prototype, "authKey", {
        get: function () {
            return this._authKey;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentDB.prototype, "client", {
        get: function () {
            return this.client;
        },
        enumerable: true,
        configurable: true
    });
    return DocumentDB;
})();
exports.DocumentDB = DocumentDB;
