var Calculadora = (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (a, b) {
        return a + b;
    };
    Calculadora.prototype.subtrair = function (a, b) {
        return a - b;
    };
    Calculadora.prototype.multiplicar = function (a, b) {
        return a * b;
    };
    return Calculadora;
})();
exports.Calculadora = Calculadora;
