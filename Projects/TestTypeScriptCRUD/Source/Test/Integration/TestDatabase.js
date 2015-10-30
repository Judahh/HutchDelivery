/// <reference path='../../../typings/mocha/mocha.d.ts' />
/// <reference path='../../../typings/chai/chai.d.ts' />
/// <reference path='../../../typings/mongodb/mongodb.d.ts' />
/// <reference path='../../../typings/mongoose/mongoose.d.ts' />
var chai = require("chai");
var mongoose = require("mongoose");
chai.should();
describe("TestDatabase", function () {
    it("Deve retornar o AccountName iviaq", function () {
        var createInstance = new mongoose.Mongoose();
        var Schema = mongoose.Schema;
        var CreateSchema = new Schema({});
        mongoose.connect('mongodb://admin:541236987@localhost:port/admin');
        var conn = mongoose.createConnection('mongodb://admin:541236987@localhost:port/admin');
        conn.should.be.equal("iviaq");
    });
});
