import { Table } from "./Table.js";

export class Exams extends Table {

        constructor (path, data) {
            super (path);
            this.data = data; // массив с данными
        };
        setElement() {
        this._table = document.querySelector(this.path);
        let html = "<tr><th colspan='2'>Расписание экзаменов</th></tr>";

        // Object.entries превращает объект в массив пар [ключ, значение]
        for (let [day, details] of Object.entries(this.data)) {

        // первая группа из массива
        const groupObj = details["Группа"][0]; 
        const groupName = Object.keys(groupObj)[0]; // Кф-17
        const info = groupObj[groupName];           // Текст

        html += `
            <tr>
                <td style="white-space: pre-line;">${day}</td>
                <td style="white-space: pre-line;"><b>${groupName}</b><br>${info}</td>
            </tr>`;
        }

    this._table.innerHTML = html;
    }

    }