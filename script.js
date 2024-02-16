localStorage.setItem('a', '10');
localStorage.setItem('b', '20');
localStorage.setItem('c', '30');

let sum = localStorage.getItem('a') + +localStorage.getItem('b') + +localStorage.getItem('c');
console.log(sum);

let time = localStorage.getItem('time');

console.log(time);

// метод Date.now(), возвращающий текущую метку времени.
// количество миллисекунд с 1 января 1970 года

if (time === null) {
    let now = date.now();
    localStorage.setItem('time', now);
}

localStorage.setItem('key', '1');
let value1 = localStorage.getItem('key');

console.log(value1);

localStorage.setItem('key', '2');
value1 = localStorage.getItem('key');

console.log(value1);

// удалить данные из LS
localStorage.removeItem('key');

// сделайте счетчик обновления страницы. Пусть счетчик обнуляется после того, как дойдет до 10 

//localStorage.setItem('count', +localStorage.getItem('count') + 1);
//console.log(+localStorage.getItem('count') + 1);

let count = +localStorage.setItem('count') + 1;
if (count > 10) {
    count = 0;
}
localStorage.setItem('count', count);

console.log(`вы $(count) раз обновили страницу`);

// количество записей в localStorage  
console.log(`количество записей в localStorage $(localStorage.length)`);

// получение ключа по номеру
let key = localStorage.key(0);
console.log(key);
let value = localStorage.getItem(key);
console.log(value);

// перебор хранилища по индексам
for (let i = 0; i < localStorage.length; i++) {
    let key = localStorage.key(i);
    let value = localStorage.getItem(key);
    console.log(value);
}

// получить массив ключей и значений хранилища 
let keys = Object.keys(localStorage);
let values = Object.values(localStorage);

console.log(`массив ключей`, keys);
console.log(`массив значений`, values);

// хранение структур в localStorage
let arr = [1, 2, 3, 4, 5];

// JSON.stringify для преобразования обЪектов в JSON
// метод JSON.stringify(student) берёт объект и преобразует его в строку.
// полученная строка json называется JSON - форматированным или сериализованным обьектом.
// мы можем отправить его по сети или поместить в обычное хранилище данных.

localStorage.setItem('arr', JSON.stringify(arr));