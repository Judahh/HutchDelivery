/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path="../../../typings/documentdb/documentdb.d.ts" />
var env = require('dotenv').load();
var chai = require("chai");
var documentDB = require("../../Shared/Util/DocumentDB/DocumentDB");
chai.should();
describe("TestDatabase", function () {
    it("Deve retornar todos os DBs", function () {
        var docDBClientWrite = new documentDB.DocumentDB();
        docDBClientWrite.getListDatabase(function (databases) {
            databases.items.forEach(function (element) {
                console.log(element);
            });
        });
    });
});
