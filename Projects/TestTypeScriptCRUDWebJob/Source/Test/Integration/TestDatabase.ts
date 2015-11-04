/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path="../../../typings/documentdb/documentdb.d.ts" />

var env = require('dotenv').load();
import DocumentDB = require('documentdb');
import chai = require("chai");
chai.should();

describe("TestDatabase", function() {
	it("Deve retornar", () => {
		var docDBClientWrite = new DocumentDB.DocumentClient(process.env.AZURE_DOCUMENTDB_ENDPOINT, {masterKey: process.env.AZURE_DOCUMENTDB_AUTH_KEY});
		var docDBClientRead = new DocumentDB.DocumentClient(process.env.AZURE_DOCUMENTDB_ENDPOINT, {masterKey: process.env.AZURE_DOCUMENTDB_AUTH_KEY});
		var queryIterator=docDBClientWrite.queryCollections("dbs/appDB/colls/agendamentos","SELECT * FROM c");
		queryIterator.forEach(function(){
			
		}
		// console.log(docDBClientWrite.queryDatabases("SELECT *"));
		// console.log(queryIterator.toArray);
		// console.log(docDBClientWrite.queryDocuments("dbs/appDB/colls/agendamentos","SELECT *"));//.should.be.equal("???")"/appDB/agendamentos",;
		
		var databaseDefinition = { id: "appDB" };
		var collectionDefinition = { id: "agendamentos" };
		var documentDefinition = { id: "hello world doc", content: "Hello World!" };
	})
})