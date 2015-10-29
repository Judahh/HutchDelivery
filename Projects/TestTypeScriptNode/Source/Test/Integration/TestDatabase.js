var chai = require("chai");
var mongodb = require("mongodb");
chai.should();
describe("TestDatabase", function () {
    it("Deve retornar o AccountName iviaq", function () {
        var mongoDB = new mongodb.MongaDB();
        var user = new user.User();
        user;
        account.name.should.be.equal("iviaq");
    });
});
