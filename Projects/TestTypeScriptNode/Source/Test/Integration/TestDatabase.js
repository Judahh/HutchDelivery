var chai = require("chai");
var mongodb = require("mongoose");
chai.should();
describe("TestDatabase", function () {
    it("Deve retornar o AccountName iviaq", function () {
        var createInstance = new mongoose.Mongoose();
        var Schema = mongoose.Schema;
        var CreateSchema = new Schema({});
        mongoose.connect('mongodb://user:pass@localhost:port/database');
        mongoose.connect('mongodb://hostA:27501,hostB:27501', { mongos: true });
        var conn = mongoose.createConnection('mongodb://user:pass@localhost:port/database');
        var mongoDB = new mongodb;
        var user = new user.User();
        user;
        account.name.should.be.equal("iviaq");
    });
});
