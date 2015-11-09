/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path="../../../typings/documentdb/documentdb.d.ts" />
var env = require('dotenv').load();
var DocumentDB = require('documentdb');
var chai = require("chai");
chai.should();
describe("TestDatabase", function () {
    it("Deve retornar todos os DBs", function () {
        var docDBClientWrite = new DocumentDB.DocumentClient(process.env.AZURE_DOCUMENTDB_ENDPOINT, { masterKey: process.env.AZURE_DOCUMENTDB_AUTH_KEY });
        var databaseDefinition = { id: "appDB" };
        var collectionDefinition = { id: "agendamentos" };
        docDBClientWrite.queryDatabases("SELECT * FROM d").toArray(function (err, result) {
            if (err) {
                throw new Error(err.body);
            }
            else {
                docDBClientWrite.queryCollections(result[0]._self, "SELECT * FROM c").toArray(function (err, result) {
                    if (err) {
                        throw new Error(err.body);
                    }
                    else {
                        result.forEach(function (element) {
                            console.log(element);
                        });
                    }
                });
            }
        });
    });
});
