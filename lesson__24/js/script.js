'use strict'


// Массив. Типы данных могут быть разными, и их мы можем там сохранять. Чтобы не писать разные переменные , можно помещать их в массив.
let someNum = [];
someNum = [5, 10, 50];
console.log(someNum);
// тип данных object



let usersNames = ['Лиза', 'Лия', 'Лиля'];
console.log(usersNames);
console.log(usersNames[1]); //Идет обращение к элементу массива через ключ, который присваевается элементу при добавлении его в массив.
// В консоли будет результат "Лия", если нет элемента под определеным ключом, результат будет undefined.



// Перебор элементов массива через цикл for
for (let i = 0; i < usersNames.length; i++) {
   console.log(usersNames[i]);
}


// Метод перебора массива forEach.
// array.forEach(element => { }); // Синтаксис записи forEach.
usersNames.forEach(userName => {
   console.log(userName);
});
// Если добавить через запятую index и закрыть в скобки можно вывести ключ элемента. (element, index).



// Добавляем элемент в массив. push. Добавляет в конец массива.
usersNames.push('Лидия');
console.log(usersNames);//  в консоль добавился новый элемент.



// Поиск в массиве. С помощью этого поиска можем узнать есть элемент в массиве.
console.log(usersNames.includes('Лия'));// Поиск даст результат true только если есть четкое соответствие значения элемента массива.
if (usersNames.includes(10)) {// если результат false, переводим с помощью ! в true и уже тогда код выполняется.
   usersNames.push(10);
   console.log(usersNames);
}



// Проверка "это массив"? (Array.isArray(имя))
console.log(Array.isArray(usersNames));// если это массив, то в консоль попадает результат true



// Функция которая сортирует числа.
console.log(someNum.sort());// sort сортирует в произвольном порядке
function compareNumeric(a, b) {
   // if (a > b) return 1;
   // if (a == b) return 0;
   // if (a < b) return -1;//развернутый вариант
   return a - b;
}
console.log(someNum.sort(compareNumeric));



//Перевод массива в строку. join('') - в скобках указываем чем будем розделять элементы (пробел, слеш и т.д.). По умолчанию запятая
let userStr = usersNames.join('/');
console.log(userStr);


// ФУНКЦИИ 

// Объявление функции. Используется для запуска кода который повторяется и для использования метода функционального программирования.

// Синтаксис: function имя(параметры){ тело функции(код)}

// именна функций. Пример: 
/*
showMessage - показать сообщение
getOptions - вернуть значение
calcSum - вычеслить сумму 
check .... - что-то проверяет
create... - создает и т.д.
*/

// Объявление функции
function showMessage() {
   console.log(`Наше сообщение`);
}
// Вызов функции
showMessage() // можно вызывать функцию до её объявления,  так же можно вызывать её очень много раз.

// Параметры функции. Так же в скобки параметров можно указать по умолчаю значение, и при вызове такой функции(если оставим их пустыми) это значение будет выводится в консоль.
//
function someFuncArrow(text = 'Liza') {
   console.log(text);
}
someFuncArrow();//пример значения функции по умолчанию.
//

const numOne = 58;
const numtwo = 88;
// Объявление функции
function calcSum(a, b) {
   console.log(a + b);
}
// Вызов функции
calcSum(numOne, numtwo);


// Возврат результата
function calcSum(a, b) {
   return a + b;
}
function showSum(sum) {
   console.log(sum);
}
const calcSumResult = calcSum(numOne, numtwo);
showSum(calcSumResult);


// Область видимости. Функция может быть вложенна в середину функции, но если мы захотим её вызвать за приделами блока, это вызовет ошибку. Нужно вызывать на одном уровне вложености. 

let someVar;
function someFunc() {
   someVar = 50;
   function someElseFunc() {
      console.log(' text');
   }
   someElseFunc()
}
someFunc()// Если не вызвать эту функцию (родительскую), то вложенная функция тоже не запустится.
console.log(someVar);
// someElseFunc() - если её вызвать за приделами блока вызовет ошибку.
// Если присвоить переменной имя функции 'let someElseFunc;' , а внутри блока присвоить ей значение "= function" , то фунция будет выполнятся за приделами блока



//Функциональное выражение
let someElseFuncsh;
function someFuncsh() {
   someVar = 50;
   someElseFuncsh = function () {
      console.log('new text');
   }
}
someFuncsh()// записывается "родитеская" функция, а потом дочерняя. Если поменять местами, вызовет ошибку
someElseFuncsh()


// Стрелочные функции
let showText = (text) => console.log(text);
showText(`Привет`);


// ========================= DOM ==========================

// WINDOW 
let windowWidth = window.innerWidth;// получение ширины браузера (вьюпорта)
let windowHeigth = window.innerHeight;// получение высоты браузера (вьюпорта)
console.log(windowWidth, windowHeigth);//выводим ширину и высоту в консоль


// Navigator
console.log(navigator.userAgent);// данные о браузере


// Location
//console.log(location.href); // адресная строка браузера
//location.href = "https://www.youtube.com/watch?v=Azy8fXkmtIQ&t=1030s"//перенаправление пользователя


// Alert
// alert('сообщение');

// Prompt. Пользователь может отвечать на вопрос, его ответ можно увидеть в консоли
//let userPrompt = prompt (`Как настроение?`);
//console.log(userPrompt);



// Объектная модель документа. (Document Object Model)

// Навигация по документу.

const htmlElement = document.documentElement;// обращение к тегу html

const headElement = document.head;// обращение к тегу head

const bodyElement = document.body;// обращение к тегу body

// Первый и последный дочерний элемент
//const firstChildNode = bodyElement.firstChild;// можно так же  обратится к последнему элементу через lastChild. этот способ не игнорирует пробелы, поэтому мы используем другой способ:

const firstChildNode = bodyElement.firstElementChild;// первый элемент
const lastChildNode = bodyElement.lastElementChild;// последний элемент

console.log(firstChildNode);
console.log(lastChildNode);

// Коллекция всех дочерних элементов

const childNodes = bodyElement.children;
console.log(childNodes);

// Перебор коллекции через цикл FOR

for (let i = 0; i < childNodes.length; ++i) {
   console.log(childNodes[i]);
}

// дополнительно есть метод for .. of для коллекции

// for (let childNode of childNodes){
//    console.log(childNode);
// }

//  Навигация к родительскому и соседним элементам 

const prevSib = bodyElement.previousElementSibling; //перед этим элементом
const nextSib = bodyElement.nextElementSibling; // после этого элемента
const parentElement = bodyElement.parentElement;// родительский элемент

console.log(prevSib);
console.log(nextSib);
console.log(parentElement);

// ====================ЧАЩЕ ВСЕГО ИСПОЛЬЗУЕТСЯ!!!!===============

// Поиск и получение любого элемента


// Получение первого найденого объекта
const someObject = document.querySelector('.block')// можно писать начиная от тега заканчивая *(тег, класс,атрибут,id и т.д). Заканчивает свой поиск на первом найденом (нами указанным) в скобках объекте.


// Получение списка найденых объектов
const someObjects = document.querySelectorAll('.block');

someObjects.forEach(someNewObject => {
   someNewObject.style.color = '#fff'
})


//  Можно искать и в определенном объекте
const list = document.querySelector('.list');
const itemList = list.querySelectorAll('.list__item');
console.log(itemList);

// ========= CLOSEST ===========
// Проверка наличия родительского элемента. Поиск. Ищет не только родительский объект но и есть ли указанный селектор у самого объекта.

const pageParent = list.closest('.block');
// console.log(pageParent);

if (pageParent) {
   console.log('Есть');
} else {
   console.log('нет');
}


//  Изменение (заменна) документа

// itemList.forEach(listItem => {
//    console.log(listItem.innerHTML);
// }); // получаем то что в середине объекта включительно с тегами. Можно перезаписывать контент в середине объекта.
// (textContent - можно получить текст, который в середине объекта, можно его перезаписать)


itemList.forEach(listItem => {
   listItem.innerHTML = `<a class= "link__js"> YES maybe NO</a>`;
});//меняем документ. В данном примере через цикл добовляем каждому объекту тег с текстом. <p> yes</p>. В html изменения не отображаются. Изменения видим в инспекторе элементов.

// Создание объекта

let newObject = document.createElement('div');
newObject.innerHTML = `<a class="link-inner"></a>`;

list.before(newObject);// before(в начале,перед), так же можно after(в конце, после) ,prepend (внутри в начале), append (внутри в конце).


// insertAdjacentHTML/Text/Element

list.insertAdjacentHTML("afterend", `   <div class="slider">
<p> Я текст , которого нет в html</p>
<a href="#" class="slider__link"> Я ссылка спрятанная в js 😎, можешь не искать меня в html 😁</a>
</div>`)

//beforeend - после внутри
// beforebegin -перед 
// afterbegin - перед внутри
// afterend - после 

// Стили и классы

// Управление классами. Свойства className и classList

//Свойство classList. Специальный объект с методами для добавления/удаления одного класса.

const element = document.querySelector('.menu__link');
element.classList.add('active');//добавляем класс
//element.classList.remove('active');//удаляем класс
//element.classList.toggle('active');//добавляем класс если его нет, если есть удаляем
//element.classList.contains('active');//проверяем есть ли класс, возвращает true/ false

for (let className of element.classList) {
   console.log(className);
}//видим все классы которые есть у объекта

// Управление стилями style. Если мы используем свойство которое имеет 2 и более слов, записуем в "веблюжем" стиле

// element.style.backgroundColor = "greenyellow";

//element.style.cssText = `записываем параметры как css`;// перезаписывает все до этого записанные свойства

// Атрибуты и свойства

//element.hasAttribute(`name`);// проверка наличия
//element.getAttribute(`name`);// получение значения атрибута
//element.setAttribute(`name`, `value`);// устанавливаем значение атрибута
//element.removeAttribute(`name`);// удаляем атрибут

element.setAttribute(`some-attribute`, `some-value`);
if (element.hasAttribute(`some-attribute`)) {
   console.log(`yes`);
}









//=========================================================


//========================== Видео №1=====================

//Задание № 1

function showName() {
   console.log(`Вася`);
}

//showName() // если вызвать просто функцию, то результат будет Вася, так как она раньше по коду стоит, но так как в задании указанна задержка(хоть и 0ms), то в консоль выводит результат Коля, а потом Вася( из-за того что задержка 0ms, то в одно время). При выполнении второго задания обнаружила интерестный момент, что теперь наш Вася будет попадать в консоль последним после всего выполненого кода :).
setTimeout(showName, 0);
console.log(`Коля`);

//  Задание № 2

showNewMessage();

function showNewMessage() {
   console.log(`Правильно, так как функцию можно вызывать и до её объявления! Зайди в консоль, проверь :)`);
}

// Задание № 3
//someMassege();// Этот вариант указан в задании и он вызовет ошибку, потому что нельзя использовать переменую до её объявления.
let someMassege = function () {
   console.log(`:)`);
}
someMassege();// мой вариант, хотелось увидеть смайлик в консоли


// Задание № 4 

if (2 > 1) {
   function newMassege() {
      console.log(`Ошибка, так как при строгом режиме запустить функцию можно на одном уровне вложености`)
   }
   newMassege()// мой вариант
}
//newMassege()// Вариант с видео

// ===================== Видео № 2 ========================

// Задание № 1

let arr = ['Ваня', 'Иштван', 'Оля'];
let newArr = arr;
newArr.push('Петя');
console.log(arr.length);// ответ 4, потому что добавился Петя(теперь 4 объекта в массиве). Если посмотреть ключ(индекс), то от 0 до 3.

// Задание № 2

let users = ['Ваня', 'Иштван'];
users.push('Оля')
console.log(users);
users[1] = `Петя`;
console.log(users);
let userSpl = users.splice(0, 1);
console.log(userSpl);
users.unshift('Маша', 'Паша');
console.log(users);

users.forEach((user, index) => {
   console.log(index);
   console.log(user);
});// если честно то не до конца поняла условие задания , чтоб код поиска работал для массивов любой длинны. Предположила что идет речь о переборе массива через forEach.

// Задание № 3

let usersNewArray = ['Ваня', 'Иштван', 'Оля'];
usersNewArray = usersNewArray.splice(1, 1);
console.log(usersNewArray);

// Задание № 4

let str = `Ваня,Иштван,Оля`;
let strNew = str.split(',')
console.log(strNew);

// Задание № 5

let arrNew = [9, 2, 8];
let result = arrNew.reduce(function (previousValue, item, index, array) {
   console.log(previousValue);
})
// в видео указана переменная которой нет (arrTwo), что вызывает ошибку, но если Женя просто ошибся в видео и это момент упустить, присвоить существующую переменую, то результат будет 9, так как не указано первоночальное значение и тогда оно будет равно первому элементу в массиве.

// ====================== Видео 3 =======================

//  Задание № 1 

// написала два варианта:
/*//Вариант"1 Как добавить если нет атрибута в html
const newAttribute = document.querySelector('.block');
newAttribute.setAttribute(`data-say-hi`, `yes`);
if (newAttribute.hasAttribute(`data-say-hi`)){
   console.log(`Привет`);
}
*/
//Вариант № 2 Как найти по атрибуту, если он уже есть в html и узнать свойство атрибута
const newAttributeEl = document.querySelector('[data-say-hi]');
console.log(newAttributeEl.dataset.sayHi);


//  Задание № 2
const itemsMenu = document.querySelector('.items-menu');
const itemNewList = itemsMenu.lastElementChild;
console.log(itemNewList); // в видео вариант второй, то есть последний. В моем варианте другие именна.

//  Задание № 3

const childElement = document.querySelectorAll('.like');
console.log(childElement);


//  Задание № 4

const listInner = document.querySelector('.list');
listInner.insertAdjacentHTML("beforeend", '<li>Я новый тег</li>')//добавился во внуть тега ul, в конец.

// ====================== Видео 4 =======================

//  Задание № 1 


const elementMain = document.documentElement;
const elementWidth = elementMain.clientWidth;
console.log(elementWidth)
const windowWidthNew = window.innerWidth;
console.log(windowWidthNew);

const resultWidth = windowWidthNew - elementWidth;
console.log(resultWidth);// ширина полосы прокрутки

// Задание № 2

function scroll() {
   window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
   });
}
setTimeout(scroll, 1000);

//  Задание № 3

//кординаты данных блоков относительно wrappera так как у него есть position: relative;. Если бы не было, то были бы кординаты относительно тега body.
const blockList = document.querySelector('.items-menu');
const elementOffsetPer = blockList.offsetParent;
console.log(elementOffsetPer);
const elementLeft = blockList.offsetLeft;
const elementTop = blockList.offsetTop;
console.log(elementLeft);
console.log(elementTop);


const listNew = document.querySelector('.list');
const elementNewOffsetPer = listNew.offsetParent;
console.log(elementNewOffsetPer);
const newElementLeft = listNew.offsetLeft;
const newElementTop = listNew.offsetTop;
console.log(newElementLeft);
console.log(newElementTop);

// P.S    А Вася так и ходит за нами по консоли :)
