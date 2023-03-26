"use strict"
// length - длинна строки.
let userName = `aleX`;
console.log(userName.length);

// строка - это массив. ([])
console.log(userName[0]);//пишем в квадр. скобках к какому символу хотим обратиться.


// toUpperCase(), toLowerCase() - верхний и нижний регистр. переводит значение.
console.log(userName.toUpperCase());


// поиск - метод includes (startWith ,endWith).
//console.log(userName.includes('s')) // false
console.log(userName.includes('l'))// true
// для облегчения поиска можно значение, перевести в один регистр. 
let userNameLower = userName.toLowerCase();
console.log(userNameLower.includes('ex'));


// поиск части строки slice(start,end);
let userColorEyes = `green`;
let userNewColorEyes = userColorEyes.slice(0, 3);//от 0 до 3 (0,1,2)
console.log(userNewColorEyes);


// поиск и замена replace
userName = userName.replace('a', ' ');
console.log(userName);


// методы чисел 
let userNum = 30.4;
// 3 варианта округления Math.floor, Math.ceil, Math.round.
console.log(Math.floor(userNum));// округляет в меньшую сторону
console.log(Math.ceil(userNum));// округляет в большую сторону
console.log(Math.round(userNum));// класическое округление. до 0.5 в меньшую, 0.5 и больше , то в большую

// toFixed() - округляет число до указанного в скобках после запятой и возвращает тип данных string

let someNum = 3.654789;
console.log(someNum.toFixed(2));
console.log(+someNum.toFixed(2));// переводит опять в тип данных number



// модуль числа Math.abs()
let userNewNum = -88;
console.log(Math.abs(userNewNum));// уберает миносовое значение.

//  рандомное число от 0 до 1. Math.random()
console.log(Math.random());


// поиск максимального и минимального числа из представленных. Math.max(1,2,-8) Math.min(1,2,-8)
console.log(Math.max(2, 8, -13));
console.log(Math.min(2, 8, -13));
let numMax = Math.max(16, 48, -11);
console.log(numMax);



// parseInt (целое число) parseFloat (дробное). меняет тип данных если была строка (внутри которой есть число), станет тип число. Ищет до первого символа (которое не является числом). если начинается не с числа, то в консоль попадет результат NaN.
let newNumber = 88.8;
console.log(parseInt(newNumber));
console.log(parseFloat(newNumber));

let twoNumber = `l222`;
console.log(parseFloat(twoNumber));// результат NaN

// Основные Операторы
// оператор -
let numOne = `145`;// если 145 будет string, то - пробует менять тип на number.(если есть только числовые значения)
console.log(typeof numOne);

let numTwo = 122;
let numSumm = numOne - numTwo;
console.log(numSumm);
console.log(typeof numSumm);


// оператор /  и *. так же переводит тип данных в number. имеет приоритет над минус и плюс, но скобки с большим приоритетом и то что закрыто в них будет выполнятся в первую очередь.
numSumm = numOne / numTwo;
console.log(numSumm);

numSumm = numOne * numTwo;
console.log(numSumm);

// взятие остатка от деления %

numSumm = numOne % numTwo;
console.log(numSumm);

// оператор добавления + . Не меняет тип данных.

numSumm = numOne + numTwo;
console.log(typeof numSumm);// тип данных в консоль выводит string.
console.log(numSumm);// если тип данных разный то значения складывает в одну строку.

// есть бинарный и унарный способ вычесления. бинарный с двумя операндами.
// унарный  способ добавления, используется только с одним операндом. Можно использовать чтоб перевести тип данных со строки в число.

numSumm = +numOne + numTwo;
console.log(numSumm);
console.log(typeof numSumm); // тип данных number.

// инкримент и дикримент ++ меняет значение +1 /  --   меняет значение -1. переводит тип данных. Работает только с перемеными.
let newMyNum = 28;
console.log(++newMyNum); // добавляет +1
console.log(--newMyNum); // отнимает -1

// приоритетность операторов.
newMyNum = (2 + 2) * 3 / +"4";
console.log(newMyNum);


// операторы сравнения. булевое значение.
//  < -меньше;
// > -больше; 
// == - равно;
// === - строгое равно
// != - не равно . не переводит тип данных
// !== строгое не равно. не переводит тип данных
// можно >= <= (больше или равно) (меньше или равно)

let resNum = 10 == 20; // false
console.log(resNum);
resNum = 10 !== 20; // true
console.log(resNum);
resNum = 10 === 20; // false
console.log(resNum);
resNum = 10 != 20; // true
console.log(resNum);

// логические операторы 


// ! - возвращает обратное значение 
let result = 10 < 5;
console.log(result); // false
result = !10 < 5;
console.log(result); // true


// || - или. Ищет первое true  и на этом прекращает свою работу. Если будет все false, то закончит своё действие на последнем.

result = 0 || 8; // 8
console.log(result);
result = 5 || 8; // 5
console.log(result);
result = 0 || null; // null
console.log(result);


// &&  и . Ищет первое false  и на этом прекращает свою работу. Если будет все true, то закончит своё действие на последнем.

result = 8 && 0 && null; // 0
console.log(result);
result = 5 && 8 && 28; // 28
console.log(result);
result = 0 && null; // 0
console.log(result);


// условное ветвление
// if(условие){код выполнения} - выполнится если условие возвращает true.

if (numOne > numTwo) {
   console.log('правда');
} else {
   console.log('ложь');
}

// else - выполнится если все условия возвращает false.
if (numOne == numTwo) {
   console.log('правда');
} else {
   console.log('ложь');
}


if (numOne == numTwo) {
   console.log('правда');
} else if (6 == 6) {
   console.log('или')
}
else {
   console.log('ложь');
}
//  блоки else и else if  являются не обязательными.


//  Условный оператор ? 

let userMessage = 'hello'
let userMessageEnd = (8 !== 6) ? ' world!' : ' мир';
let userNewMessage = userMessage + userMessageEnd;
console.log(userNewMessage);



//  цикл for.
// синтаксис for(начало; условие окончания; шаг){код выполняется на каждом кругу цикла}
// 1 круг: значение, условие , код, шаг
// 2 и следующие: (пока условие выполняется) начинаются с условия, код, шаг. Уже без значения.

let stringNew = 'hello!'
console.log(stringNew.length);

for (let li = 0; li < stringNew.length; ++li) {
   console.log(stringNew[li]);
}

// Деректива break. Останавливает цикл на нужном нам значении.

let firstNum = 0;

for (; firstNum < 5; firstNum++) {
   console.log(firstNum);
   if (firstNum == 2) break;
}
console.log(`окончание цикла: firstNum = ${firstNum}`);

// Деректива continue. С помощью этой дерективы мы может досрочно прекратить выполнение части тела цикла, и перескочить сразу на следующий круг


for (let firstNumNew = 0; firstNumNew < 5; firstNumNew++) {
   if (firstNumNew == 2) continue;
   console.log(firstNumNew);
}












// УРОК С ОПЕРАТОРАМИ 
// Вариант 1 

console.log('35' + - '22'); // вариант не верный. ответ 35-22

// Вариант 2

console.log('35' * '22'); // вариант верный, так как умножение переводит тип данных в number

// Вариант 3

//console.log('558' > 22++); // вызовет ошибку в консоли, так как инкримент и дикримент работает только с переменными. 22 является числом , а не переменной

// Вариант 4

let itemNew = 0;
let itemNewNum = itemNew++;
console.log(itemNewNum); // ответ не верный, потому что суффиксная запись, оставить первое значение переменной. но при дальнейшем использовании переменой itemNew её значение будет 1.
console.log(itemNew);


itemNewNum = itemNew;
console.log(itemNewNum);// в этом варианте переменная itemNewNum уже будет равна 1.

// Вариант 5

console.log(!false && 11 || 18 && !''); // вариант не верный , так как ! переводит значение в обратное(имеет наивысший приоритет ). False и '' (пустые кавычки) вернется True. Так как оба варианта true, то в консоль попадет первое значение. Ответ 11.

// Вариант 6

let numberN = 0;
console.log(numberN ?? "имя");
//  в консоль попадет 0, так как он не является null или undefined.




// УРОК УСЛОВНОЕ ВЕТВЛЕНИЕ

// Вариант 1

if (1 === "1") {
   console.log('истина!');
} else {
   console.log('ложь!'); // вернёт 'ложь' так как при строгом равнении число 1 не равно строке 1.
}


// Вариант 2

if (5 == "5") {
   console.log('истина!');
} else {
   console.log('ложь!');
}
// вернет 'истина' так как при не строгом равнении число 5 будет равно строке 5. 


// Вариант 3

let someMess = (92 > '11' && 58 < 100) ? 'истина!' : 'ложь!';

console.log(someMess); // вернет истину, так как 92 больше 11 (оператор сравнение меняет тип данных на number)  и 58 меньше 100.  оператор && не находит false, выводит 58 меньше 100, это значит условие выполненно и и в консоль попадет первый вариант 'истина'.

// Вариант 4

if (0) {
   console.log('ложь!');
} else if (" ") {
   console.log('истина!');
}
// вернет "истина" так как 0 это false, а пробел это уже не пустота и является true.

// УРОК ЦИКЛЫ

// Задача 1

for (let numLess = 1; numLess < 6; numLess++) {
   console.log(numLess);
}


for (let numLess = 1; numLess < 8; numLess++) {
   console.log(numLess);
   if (numLess == 5) break;
}


let num = 1;
while (num < 6) {
   console.log(num);
   num++;
}

// Задача 2

let myNumber = 8;

while (myNumber) {
   console.log(myNumber);
   myNumber--;

} //  ответ не верный. в консоль выведется последнее число 1. Потому что 0, приведет к значению false и цикл прекратится.

// Задача 3

// let numUserTwo = 0

// while (numUserTwo < 3){
//    console.log(`число: ${numUserTwo}`);
//    num++;
// } // число 0

// Задача 4


firstFor: for (let num = 0; num < 2; num++) {
   for (let size = 0; size < 3; size++) {
      console.log(size);
      if (size == 1) break firstFor;
   }
}

// УРОК ТИП ДАННЫХ NUMBER

// Задача 1
let myNumberFirst = 1.005 + Number.EPSILON;
myNumberFirst = Math.round(myNumberFirst * 100) / 100;
console.log(myNumberFirst);

// Задача 2

myNumber = '140.60px';
console.log(parseFloat(myNumber));

// Задача 3

let value = 10 + 'liza';
if (isNaN(value)) {
   console.log('результат NaN');
}


let valueNew = 10 + 'liza';
if (valueNew !== NaN) {
   console.log('результат NaN');
}

// Задача 4

console.log(Math.max(10, 58, 39, -150, 0));

// Задача 5

console.log(Math.floor(58.858));


// УРОК СТРОКИ

// Задание 1

let someName = 'Masha';
let text = `Hello, I'm ${someName}`;
console.log(text);// данный пример правельный, в отличие от примера в видео, так как не поставленны обратные кавычки.

//  Задание 2

someName = "фрилансер";
console.log(someName[5]);

// Задание 3

someName = 123 + '456';
console.log(typeof someName);// тип данных string
console.log(someName); // ответ не верный так как + не переводит тип данных и результат будет сложение в одну строку этих двух значений.

// Задание 4

someName = 'liza'
console.log(someName.toUpperCase());

// Задание 5

someName = "фрилансер";
console.log(someName.slice(3, 6));

// Задание 6

console.log(someName.includes('лан', 4));// ответ false. Потому что мы ищем с 4 буквы, а нужно с 3. Отчет идет с 0.