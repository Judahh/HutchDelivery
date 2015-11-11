/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
var importDocumentDB = require('documentdb');
var importDatabase = require('./Database');
var importList = require('../Collection/List');
var DocumentDB = (function () {
    function DocumentDB(endPoint, authKey) {
        this._endPoint = endPoint;
        this._authKey = authKey;
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
                    var database = new importDatabase.Database(element, _this._client);
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
