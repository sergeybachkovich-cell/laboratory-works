//Объект Car
function Car(model, color, year) {
//Свойства объекта
this.model = model || "неизвестно";
this.color = color || "черный";
this.year = year || 1900;
//методы объекта
this.toString = function() {
return this.model + ' ' + this.color + ' ' + this.year;
}
this.go = function(speed) {
return 'Автомобиль ' + this.toString() + ' движется со скоростью '
+ speed + ' км/ч';
}
this.stop = function () {
return 'Автомобиль ' + this.toString() + ' остановился';
}
this.signal = function () {
return 'Автомобиль ' + this.toString() + ' подал сигнал';
}
}