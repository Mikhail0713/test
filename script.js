'use strict';

// let x = [ ] + 1 + 2; 
// console.log(typeof(x));

// alert( 0 || "" || 2 || undefined || true || falsе );

// let y = 1; 
// let x = y = 2; 
// alert(x);


// // let num = 50;

// switch (num) {
//     case num < 49:
//         console.log("Неверно!");
//         break;
//     case num > 100:
//         console.log('Многовато будет!');
//         break;
//     case num > 80:
//         console.log('Всё ещё многовато!');
//         break;
//     case 50:
//         console.log('Верно!');
//         break;
// }

// let num = 50; 

// // while (num < 55) {
// //     console.log(num);
// //     num++;
// // }

// do {
//     console.log(num);
//     num++;
// } while (num < 55)
// function learnJS (lang, callback) {
//     console.log("Я учу " +lang);
//     callback();
// }

// function done() {
//     console.log("Я прошел третий урок!");
// }

// learnJS("JavaScript", done);

let options = {
    width: 1024,
    height: 1024,
    name: 'test'
};

console.log(options.name);

options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}
console.log(Object.keys(options).length);

// let arr = ['first', 2, 3, 'four', 5];



// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ': ' + item + " (массив: " + mass + ")");
// });

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
//     console.log(key);
// }

// console.log(arr);

// let ans = prompt('',''),
//     arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['asw','qqw','zzz','qwe'],
//     i = arr.join(', ');

// console.log(i);

let arr = [1, 15, 4],
    i = arr.sort(compareNum);

function compareNum(a,b) {
    return a-b;
}

console.log(i);

