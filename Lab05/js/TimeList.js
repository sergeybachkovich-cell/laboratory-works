import { Table } from "./Table.js";
export class TimeList extends Table {
    constructor(path, data) {
        super(path);
        this.data = data; // объект list
    }

    // Метод для отрисовки всей таблицы
    setElement() {
        let newTable = `<tr><th>День</th><th>Время</th><th>Предмет</th><th>Ауд.</th><th>Препод</th></tr>`;

        // 1. Перебор дней (Понедельник, Вторник...)
        for (let day in this.data) {
            const dayLessons = this.data[day]; // массив занятий на конкретный день

            // 2. Перебор массива занятий внутри этого дня
            dayLessons.forEach((lesson, index) => {
                newTable += `
                    <tr>
                        <td>${index === 0 ? day : ""}</td> 
                        <td>${lesson.time}</td>
                        <td>${lesson.subject}</td>
                        <td>${lesson.room}</td>
                        <td>${lesson.teacher}</td>
                    </tr>`;
            });
            // пустая строка между днями для красоты
            newTable += `<tr style="background: #eee; height: 5px;"><td colspan="5"></td></tr>`;
        }

        this.getElement.innerHTML = newTable;
    }
}