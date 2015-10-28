/// <reference path='../../typings/mocha/mocha.d.ts' />
/// <reference path='../../typings/chai/chai.d.ts' />
var calc = require("../app/calc");
var chai = require("chai");
chai.should();
describe("Testes", function () {
    it("Deve retornar 3 quando somo 1+2", function () {
        var resultado = new calc.Calculadora().somar(1, 2);
        resultado.should.be.equal(3);
    });
    it("Deve retornar 1 quando subtraio 2-1", function () {
        var resultado = new calc.Calculadora().subtrair(2, 1);
        resultado.should.be.equal(1);
    });
    it("Deve retornar 4 quando multiplico 2*2", function () {
        var resultado = new calc.Calculadora().multiplicar(2, 2);
        resultado.should.be.equal(4);
    });
});
