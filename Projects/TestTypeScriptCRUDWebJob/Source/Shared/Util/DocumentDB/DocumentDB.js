/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
var importDocumentDB = require('documentdb');
var importDatabase = require('./Database');
var importList = require('../Collection/List');
var env = require('dotenv').load();
var DocumentDB = (function () {
    function DocumentDB(endPoint, authKey) {
        this._endPoint = endPoint || process.env.AZURE_DOCUMENTDB_ENDPOINT;
        this._authKey = authKey || process.env.AZURE_DOCUMENTDB_AUTH_KEY;
        this._client = new importDocumentDB.DocumentClient(this._endPoint, { masterKey: this._authKey });
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
                this._listDatabase = new importList.List();
                result.forEach(function (element) {
                    var collections = element._colls;
                    var users = element._users;
                    var database = new importDatabase.Database(element.id, element._rid, element._ts, element._self, element._etag, collections, users, _this._client);
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
