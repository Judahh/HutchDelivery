var List = (function () {
    function List() {
        this._arrayItems = [];
    }
    List.prototype.size = function () {
        return this._arrayItems.length;
    };
    List.prototype.add = function (value) {
        this._arrayItems.push(value);
    };
    List.prototype.get = function (index) {
        return this._arrayItems[index];
    };
    Object.defineProperty(List.prototype, "items", {
        get: function () {
            return this._arrayItems;
        },
        enumerable: true,
        configurable: true
    });
    return List;
})();
exports.List = List;
