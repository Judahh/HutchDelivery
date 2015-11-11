/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path="../../../typings/documentdb/documentdb.d.ts" />
var env = require('dotenv').load();
var chai = require("chai");
var importDocumentDBPatient = require("../../Infrastructure/Model/DocumentDBPatient");
chai.should();
describe("TestDatabase", function () {
    it("Deve retornar todos os DBs", function () {
        var docDBClientWrite = new importDocumentDBPatient.DocumentDBPatient();
        docDBClientWrite.getListDatabase(function (databases) {
            databases.items.forEach(function (element) {
                console.log(element);
            });
        });
    });
});
