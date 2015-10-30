/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/mongodb/mongodb.d.ts' />
/// <reference path='../../../typings/mongoose/mongoose.d.ts' />
import user = require("../../Model/User");
import chai = require("chai");
import mongodb = require("mongoose");
chai.should();

describe("TestDatabase", function() {
	it("Deve retornar o AccountName iviaq", () => {
		var createInstance = new mongoose.Mongoose();
		var Schema = mongoose.Schema;
		var CreateSchema = new Schema({});
		
		mongoose.connect('mongodb://user:pass@localhost:port/database');
		mongoose.connect('mongodb://hostA:27501,hostB:27501', { mongos: true });
		
		var conn: mongoose.Connection = mongoose.createConnection('mongodb://user:pass@localhost:port/database');

		var mongoDB = new mongodb;
		var user = new user.User();
		user
		account.name.should.be.equal("iviaq");
	})
})