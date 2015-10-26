/// <reference path='../typings/mocha/mocha.d.ts' />
/// <reference path='../typings/chai/chai.d.ts' />
var calc = require("../app/calc");
var chai = require("chai");
chai.should();
describe("Testes", function () {
    it("Deve retornar 3 quando somo 1+2", function () {
        var resultado = new calc.Calculadora().somar(1, 2);
        resultado.should.be.equal(3);
    });
});
