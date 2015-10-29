/// <reference path='../../typings/mocha/mocha.d.ts' />
/// <reference path='../../typings/chai/chai.d.ts' />

import Account = require("../../Model/User");
import chai = require("chai");
chai.should();

describe("TestDatabase", function() {
	it("Deve retornar o AccountName iviaq", () => {
		var account = new Account.Account();
		account.name.should.be.equal("iviaq");
	})
})