export class List<T> {
    private _items: Array<T>;

    constructor() {
        this._items = [];
    }

    size(): number {
        return this._items.length;
    }

    add(value: T): void {
        this._items.push(value);
    }

    get(index: number): T {
        return this._items[index];
    }
    
    get items():Array<T>{
        return this._items;
    }
}