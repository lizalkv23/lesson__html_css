"use strict"

	// Клонирование объекта =====================
	//  CloneNode - клонирует сам объект
	// cloneNode(true) - клонирует объект с содержимым

	//const block = document.querySelector('.block');
	//const blockClone = block.cloneNode()// клонируем сам блок
	//console.log(blockClone);
	//const blockClone = block.cloneNode(true)// клонируем блок с содержимым
	//console.log(blockClone);


	// Удаление объекта ===============================
	//block.remove();// удаляем блок с помощью remove



	// Стили и классы ================================
	// className classList


	// className - перезаписывает класс

	//block.className = "page";// меняем класс, в css уже не дейсвуют свойства прописанные для данного объекта. Когда меняем класс уже не ставим точку, так как и так программа понимает что мы работаем с классом. В разрезе верстки не очень удобно пользоватся этим методом.

	// classList - метод работы с классами. Когда меняем класс уже не ставим точку, так как и так программа понимает что мы работаем с классом.

	//block.classList.add('active');//добавляем класс
	//block.classList.remove('active');//удаляем класс
	//block.classList.toggle('active');//добавляем класс если его нет, если есть удаляем
	//block.classList.contains('active');//проверяем есть ли класс, возвращает true/ false



	// Управление стилями style. ======================================
	//Стили записанные данным способом будут приоритетней тех которые мы записали в css, так как они на прямую записуются в html. Если мы используем свойство которое имеет 2 и более слов, записуем в "веблюжем" стиле

	// block.style.backgroundColor = "yellow";//синтаксис записи

	// block.style.cssText = `записываем параметры как css`;// перезаписывает все до этого записанные свойства.
	//block.style.backgroundColor = '';// пишем пустые кавычки чтоб убрать свойство которое мы записывали.


	// Получение значения стиля объекта
	//const block = document.querySelector('.block');
	//const blockStyle = getComputedStyle(block);
	//console.log(blockStyle);
	//const fontSize = blockStyle.fontSize;//parseInt(blockStyle.fontSize); такая запись если нам нужно получить только числовые значения 
	//console.log(fontSize);// даже если мы укажем в rem то всё рано в консоль выведет результат в пикселях.


	// Работа с атрибутами=============================
	//зарезервированный атрибут data-
	//block.hasAttribute(`name`);// проверка наличия
	//block.getAttribute(`name`);// получение значения атрибута
	//block.setAttribute(`name`, `value`);// устанавливаем значение атрибута
	//block.removeAttribute(`name`);// удаляем атрибут

	// block.setAttribute(`data-some-attribute`, `some-value`);
	// if (block.hasAttribute(`data-some-attribute`)) {
	//    console.log(`yes`);
	// } устанавливаем атрибут и его значение. Проверяем есть он или нет.

	// data атрибуты 
	//const long = document.querySelector('.block__title');
	//const someValie = long.dataset.long;// узнаем какое значение у атрибута. Если мы используем название которое имеет 2 и более слов, записуем в "веблюжем" стиле
	//console.log(someValie);

	//block.dataset.inerr = `333`;

	// Полезные свойства


	//console.log(block.tagName);//получение тега
	//block.hidden = true;// true скрывает объект. по умолчанию false



	// Размеры и координаты

	// WINDOW 
	//let windowWidth = window.innerWidth;// получение ширины браузера (вьюпорта) c полосой прокрутки включительно
	//let windowHeigth = window.innerHeight;// получение высоты браузера (вьюпорта) c полосой прокрутки включительно
	//console.log(windowWidth, windowHeigth);//выводим ширину и высоту в консоль


	// clientWidth clientHeight
	//const elementMain = document.documentElement;
	//const elementWidth = elementMain.clientWidth;//результат без полосы прокрутки, рабочая область
	//console.log(elementWidth)
	//const windowWidthNew = window.innerWidth;// с полосой прокрутки, вся ширина экрана
	//console.log(windowWidthNew);

	//const resultWidth = windowWidthNew - elementWidth;
	//console.log(resultWidth);// ширина полосы прокрутки




	// Количество прокрученных пикселей. объект window.

	//const windowScrollTop = window.scrollY;//  по оси Y
	//const windowScrollLeft = window.scrollX;// по оси X

	//console.log(windowScrollTop);// сколько пикселей скролл по вертикали
	//console.log(windowScrollLeft);// сколько пикселей скролл по горизонтали


	// scrollBy (left, top) прокрутка относительно текущего положения.

	//window.scrollBy(0, 400);
	//console.log(window.scrollY);

	// scrollTo ({параметры}) прокрутка на указанные координаты

	// window.scrollTo({
	//    top: 100,
	//    left: 0,
	//    behavior: "smooth"})


	// element.scrollIntoView() прокрутка к объекту =====================

	// long.scrollIntoView({
	//    block: "end",//"start", "center", "end". по умолчанию "center".
	//    inline: "center", //"start", "center", "end", "nearest". по умолчанию "nearest".
	//    behavior: "smooth"// плавность прокрутки
	// });// работает только через событие.


	// Позиция объекта offsetLeft(ось X) и offsetTop(ось Y), если хотим узнать относительно кого вычесляются параметры то offsetParent.
	// если у какого-то блока есть position отличающий от static то будет координаты относительно его, если нет таких параметров, то относительно body.


	// Общие размеры элемента =================================
	//console.log(long.offsetWidth);// ширина объекта
	//console.log(long.offsetHeight);// высоты объекта


	// Координаты относительно окна браузера

	//console.log(long.getBoundingClientRect().top);

	// Получение объекта по координатам 
	// elementFromPoint(x,y)
	//const element = document.elementFromPoint(100,0);
	//console.log(element);


	// ==========================СОБЫТИЯ ===================================


	// Cинтаксис

	//const link = document.querySelector('.link');

	// link.onclick = function(){
	//    console.log(`hello`);
	// }// мало умеет. нельзя повесить сразу два собития, так как будет выполняться последнее по коду.

	// element/document.addEventListener("имя события", func,options);
	// element/document.addEventListener("имя события", ()=>{код}, options);

	//link.addEventListener("click", linkAction);
	//function linkAction(event){
	//   console.log(`hi`);
	//}

	// отменна событие removeEventListener
	//link.removeEventListener("click", linkAction);

	//const options = {
	//   "capture": false, //фаза на которой должен сработать обрабочик
	//   "once": true, // если true, то выполнится действие и он будет удален автоматически
	//   "passive": false // если true, то указывает что обрабочик никогда не вызовет preventDefault()
	//}

	// Действие по умолчанию

	// preventDefault() отключение действия по умолчанию


	// события для многих элементов. Событие работает только на одном элементе. Но можно через forEach перебрать массив и повесить на каждый объект событие.

	//const items = document.querySelectorAll('.link');
	//items.forEach(item => {
	// item.addEventListener("click", linkAction);
	// function linkAction(event) {
	//  if (2>1) {
	// console.log('liza');
	//  event.preventDefault();
	//}
	//}
	//});

	// Делегирование событий. Одно событие , но на всем документе, а в случаи с перебором массива, то на каждый объект вешается событие.

	//document.addEventListener("click", action);

	//function action(event){
	//   const targetItem = event.target;
	//   if(targetItem.closest('.link')){
	//      console.log(`yes`);
	//   }
	//   console.log(event.target);// Объект на котором создали обработчика
	//}

	// Тип события
	//console.log(event.type);// тип события
	//console.log(event.clientX);// положение курсора по оси X относительно окна браузера 
	//console.log(event.clientY);// положение курсора по оси Y относительно окна браузера 
	//console.log(event.pageX);// положение курсора по оси X относительно документа
	//console.log(event.pageY);// положение курсора по оси Y относительно документа
	//console.log(event);// все детали события


	// Основные события мышью click, mouseenter - наведение мышью (hover), mouseleave -  перевод мыши с объекта

	//const mouseBlock = document.querySelector('.mouse');

	//mouseBlock.addEventListener("mouseenter", mouseAction);
	//mouseBlock.addEventListener("mouseleave", mouseAction);
	//mouseBlock.addEventListener("mousemove", mouseAction);

	//const ball = document.querySelector('.mouse__ball');

	//function mouseAction(event) {
	//if (event.type === "mouseenter") {
	// При наведении
	//console.log(event.pageY);
	//}
	//if (event.type === "mouseleave") {
	// При переведении
	//console.log(event.pageY);
	//}
	// if (event.type === "mousemove") {
	// ball.style.cssText = `
	// left: ${event.pageX}px;
	// top: ${event.pageY}px;
	// `;
	// }
	//}

	// Scroll 

	//window.addEventListener("scroll", scrollWin);
	//function scrollWin (e){
	//console.log(long.getBoundingClientRect().bottom);
	//}

	// Загрузка 

	//window.addEventListener("DOMContentLoaded", domLoaded);
	//function domLoaded(e){

	//}
	/
	window.addEventListener("load", pageLoad);
function pageLoad(e) {
	document.documentElement.classList.add('loaded');
}// потом можно по этому классу добавить оpacity 1, а для body оpacity 0, и только при полной загрузки страницы появится контент. 
//}

// Попрактиковалась с заданиями, потом удалила все практические блоки с html и поэтому всё закаментировала.


// =========================================

const formBlock = document.querySelector('.form__action');

document.addEventListener("click", formWatch);
function formWatch(event) {
	if (event.target.closest('.form__icon-btn')) {
		formBlock.classList.toggle('active');

	}
	if (!event.target.closest('.form')) {
		formBlock.classList.remove('active');
	}
}

const textInput = document.querySelector('.form__input');
const textLimit = textInput.getAttribute('maxlength');
const textCounter = document.querySelector('.form__remained span');

textInput.addEventListener("keyup", textSetCounter);
function textSetCounter() {
	const result = textLimit - textInput.value.length;
	textCounter.innerHTML = result;
}
document.addEventListener("keyup", function (event) {
	if (event.code === 'Escape') {
		formBlock.classList.remove('active');
	}
})

// const decor = document.querySelector('.lesson__item-1');
// console.log(decor);
// function parallaxMove(event){
// 		decor.style.transform = `translate(${event.clientX / 30}px,${event.clientY / 30}px)`;}
// 	document.addEventListener('mousemove', parallaxMove);

const decor = document.querySelectorAll('[data-move]');
 const speed = document.querySelector('.lesson__item')
let speedEl = speed.dataset.move;

function parallaxMove(event){
	if(decor.length){
		decor.forEach(item =>{

			item.style.transform = `translate(${event.clientX * item.dataset.move / 1000}px,${event.clientY*item.dataset.move / 1000}px`;}
			)}
		}
		document.addEventListener('mousemove', parallaxMove);
		console.log(decor.length);