export class Table {
    _table;
    constructor(path, arr) {
        this.path = path; // query selector;
        this.arr = arr; // data array
        this._table = document.querySelector(path);
    }

    get getElement() {
        this._table = document.querySelector(this.path);
        return this._table;
    }

}

