/// <reference path="../../../../typings/documentdb/documentdb.d.ts" />
var importDocumentDB = require('documentdb');
var importDatabase = require('./Database');
var importList = require('../Collection/List');
var DocumentDB = (function () {
    function DocumentDB(stringEndPoint, stringAuthKey) {
        this._stringEndPoint = stringEndPoint;
        this._stringAuthKey = stringAuthKey;
        this._client = new importDocumentDB.DocumentClient(this._stringEndPoint, { masterKey: this._stringAuthKey });
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
    Object.defineProperty(DocumentDB.prototype, "stringEndPoint", {
        get: function () {
            return this._stringEndPoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DocumentDB.prototype, "stringAuthKey", {
        get: function () {
            return this._stringAuthKey;
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
