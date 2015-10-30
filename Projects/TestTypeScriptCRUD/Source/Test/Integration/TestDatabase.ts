/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/mongodb/mongodb.d.ts' />
/// <reference path='../../../typings/mongoose/mongoose.d.ts' />
import chai = require("chai");
import mongodb = require("mongodb");
import mongoose = require("mongoose");
chai.should();

describe("TestDatabase", function() {
	it("Deve retornar o AccountName iviaq", () => {
		var createInstance = new mongoose.Mongoose();
		var Schema = mongoose.Schema;
		var CreateSchema = new Schema({});
		
		
		mongoose.connect('mongodb://admin:541236987@localhost:port/admin');
		// mongoose.connect('mongodb://hostA:27501,hostB:27501', { mongos: true });
		var conn: mongoose.Connection = mongoose.createConnection('mongodb://admin:541236987@localhost:port/admin');
		conn.should.be.equal("iviaq");
	})
})