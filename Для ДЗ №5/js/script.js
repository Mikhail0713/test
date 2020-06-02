//Тут мы задаем переменные
let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.querySelectorAll('.menu-item'),
    menuItemLi = document.createElement("li"),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    promptforApple = document.querySelector("#prompt");
//Первое задание
menu.insertBefore(menuItem[2], menuItem[1]);                    // Поменяли местами два элемента

menuItemLi.classList.add('menu-item');
menuItemLi.textContent = ('Пятный элемент');
menu.appendChild(menuItemLi);                                      // Доавблен пятый пункт в листе

//Второе задание 

document.body.style.backgroundImage = "url('/Для ДЗ №5/img/apple_true.jpg')";

//Третье задание

title.textContent = 'Мы продаем только подлинную технику Apple';

//Четвертое задание 

adv.remove();

//Пятое задание 

let questionAboutApple = prompt('Как вы относитесь к технике Apple?','');
    promptforApple.textContent = questionAboutApple;

