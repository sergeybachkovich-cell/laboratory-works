//Массив, содержащий названия месяцев
var months = new Array("Янв", "Фев", "Мар", "Апр", "Май", "Июн",
"Июл", "Авг", "Сен", "Окт", "Ноя", "Дек");
//Массив, содержащий названия дней недели.
var dayNames = new Array("Понедельник", "Вторник", "Среда",
"Четверг", "Пятница", "Суббота", "Воскресенье");

function getCurrentDate() {
//Создаем объект Date для работы с датой
var date = new Date();
var dateStr = 'Сегодня ';
dateStr += dayNames[date.getDay()] + ', '
dateStr += date.getDate() + ' ';
dateStr += months[date.getMonth()] + ' ';
dateStr += date.getFullYear() + ', ';
dateStr += date.getHours() + ' ч. ';
dateStr += date.getMinutes() + ' мин. ';
dateStr += date.getSeconds() + ' сек.';
return dateStr;
}
