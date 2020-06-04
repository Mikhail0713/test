// let box = document.getElementById('box'),
//     btn = document.getElementsByTagName('button'),
//     circle = document.getElementsByClassName('circle'),
//     heart = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// btn[1].style.borderRadius = '100%';

// circle[0].style.backgroundColor = 'red';
// circle[1].style.backgroundColor = 'yellow';
// circle[2].style.backgroundColor = 'green';

// // for (let i=0; i < heart.length; i++) {
// //     heart[i].style.backgroundColor = "blue";
// // }

// // heart.forEach(function(item,i, hearts) {
// //     item.style.backgroundColor = 'blue';
// // });

// let div = document.createElement('div'),
//     text = document.createTextNode('Тут был я');

// div.classList.add('black');

// // wrapper.appendChild(div);

// // div.innerHTML = '<h1>Hello World!</h1>';
// div.textContent = 'Hellow world!';

// document.body.insertBefore(div, circle[0]);
// document.body.removeChild(circle[1]);
// wrapper.removeChild(heart[1]);
// document.body.replaceChild(btn[1], circle[2]);
// console.log(div);


let btn = document.querySelectorAll('button'),
    wrap = document.querySelector(".wrapper"),
    link = document.querySelector('a');

// btn[0].onclick = function() {
//     alert('Ты че на кнопку нажал, попух???')
// };

// btn[0].onclick = function() {
//     alert('Опять нажал, охуел что ли?')
// };

// btn[0].addEventListener('click',function(event){
//     // console.log(event);
//     // let target = event.target;
//     // target.style.display = 'none';

//     console.log('Произошло событие: ' +  event.type + 'На элементе' + event.target);
    
// });

// wrap.addEventListener('click', function(){
//     console.log('Произошло событие: ' +  event.type + 'На элементе' + event.target);
// });

// link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('Произошло событие: ' +  event.type + 'На элементе' + event.target);
// });

// btn.forEach(function(item){
//     item.addEventListener('mouseleave', function(){
//         console.log("У вас мышка убежала!");
//     });
// });
// // btn[0].addEventListener('mouseenter', function() {
// //     alert('Ты чего на кнопку мышь навел?');
// // }); 

//touchstart
//touchmove
//touchend

//touchenter
//touchleave
//touchcancel

    // new RegExp('pattern', 'flags');
    // /pattern/

    // let ans = prompt('Введите ваше имя');

    // let reg = /n/gi;

    // // console.log(ans.search(reg));
    // // console.log(ans.match(reg));
    // console.log(reg.test(ans));


    // let pass = prompt('Введите пароль');

    // console.log(pass.replace(/./g,'*'));
    // alert('12-34-56'.replace(/-/g, ':'));

//  \d \D
//  \w \W
//  \s \S

// let ans = prompt('Введите число');

//     let reg = /\d/g;

//     console.log(ans.match(reg));

    let str = "My name is/ R2D2";

    console.log(str.match(/\//i));