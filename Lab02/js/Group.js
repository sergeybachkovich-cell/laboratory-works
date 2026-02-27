import { Table } from "./Table.js";
export class Group extends Table {
    set setElement (arr) {
        let newTable = `<tr><th>№</th><th>Моя группа</th></tr>`;
        for (let i = 0; i < arr.length; i++) {
           if ((arr[i] === 'Чугай Александра') || (arr[i] === 'Каржавина Ангелина'))
            newTable += `<tr><td>${i + 1}</td><td class="leader">${arr[i]}</td></tr>`;
           else
             newTable += `<tr><td>${i + 1}</td><td>${arr[i]}</td></tr>`;
        }
        this._table.innerHTML = newTable;
    }
}