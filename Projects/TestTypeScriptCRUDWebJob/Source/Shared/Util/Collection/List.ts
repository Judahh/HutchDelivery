export class List<T> {
    private _arrayItems: Array<T>;

    constructor() {
        this._arrayItems = [];
    }

    size(): number {
        return this._arrayItems.length;
    }

    add(value: T): void {
        this._arrayItems.push(value);
    }

    get(index: number): T {
        return this._arrayItems[index];
    }
    
    get items():Array<T>{
        return this._arrayItems;
    }
}