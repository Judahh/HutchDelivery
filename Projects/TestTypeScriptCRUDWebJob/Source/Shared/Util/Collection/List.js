var List = (function () {
    function List() {
        this._items = [];
    }
    List.prototype.size = function () {
        return this._items.length;
    };
    List.prototype.add = function (value) {
        this._items.push(value);
    };
    List.prototype.get = function (index) {
        return this._items[index];
    };
    Object.defineProperty(List.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    return List;
})();
exports.List = List;
