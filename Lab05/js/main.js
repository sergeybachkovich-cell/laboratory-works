import { list, arr, examsList } from "./data.js";
import { Exams } from "./Exams.js";
import { Group } from "./Group.js";
import { TimeList } from "./TimeList.js";
console.log(list.Понедельник[0].subject);


// fill tableGroup
(() => {
    if (document.querySelector("#table-group")) { // проверка на наличие эл-та
        let tableGroup = new Group("#table-group", arr);
        tableGroup.setElement = arr;
    }
    
})();


// fill tableTimeList
(() => {
    if (document.querySelector("#time-list")) {
        const tableTimeList = new TimeList("#time-list", list);
    tableTimeList.setElement();
    }
    
})();

// fill exams
(() => {
    if (document.querySelector("#exams-list")) {
        const examsTable = new Exams("#exams-list", examsList);
        examsTable.setElement();
    }
    
})();