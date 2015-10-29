/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/mongodb/mongodb.d.ts' />
import user = require("../../Model/User");
import chai = require("chai");
import mongodb = require("mongodb");
chai.should();

describe("TestDatabase", function() {
	it("Deve retornar o AccountName iviaq", () => {
		var mongoDB = new mongodb.MongaDB();
		var user = new user.User();
		user
		account.name.should.be.equal("iviaq");
	})
})