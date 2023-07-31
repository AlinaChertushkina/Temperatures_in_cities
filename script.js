// Создание массива городов
const cities = ["Бангкок", "Париж", "Лондон", "Дубай", "Сингапур"];

// Создание массива температур
let temperatures = [];

// Цикл для получения температур от пользователя
for (let i = 0; i < cities.length; i++) {
    let temperature = prompt(`Введите температуру для города ${cities[i]}`);
    temperatures.push(Number(temperature));
}

//Переменные со  значениями, которые гарантированно больше и меньше любой возможной температуры

let maxTemperature = -Infinity;
let minTemperature = Infinity;

//Вычисление максимальной и минимальной температуры
for (let i = 0; i < temperatures.length; i++) {
    if (temperatures[i] > maxTemperature) {
        maxTemperature = temperatures[i];
    }
    if (temperatures[i] < minTemperature) {
        minTemperature = temperatures[i];
    }
}

//Создание списка для вывода информации с температурой по городам

const list = document.createElement('ul');

for (let i = 0; i < cities.length; i++) {
    const listItem = document.createElement('li');
    listItem.innerText = `${cities[i]}: ${temperatures[i]}°C`;
    list.appendChild(listItem);
}

const maxTemperatureItem = document.createElement("li");
maxTemperatureItem.innerText = `Максимальная температура: ${maxTemperature} градусов`;
list.appendChild(maxTemperatureItem);


const minTemperatureItem = document.createElement("li");
minTemperatureItem.innerText = `Минимальная температура: ${minTemperature} градусов`;
list.appendChild(minTemperatureItem);


//Добавляем список на страницу
document.body.appendChild(list);







