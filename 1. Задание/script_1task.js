let money = prompt("Ваш бюджет на месяц?","");
let time = prompt("Введите дату в формате YYYY-MM-DD","");
let majorInMonth = prompt("Введите обязательную статью расходов в этом месяце","");
let howMuch = prompt("Во сколько обойдется?","");
let majorInMonth2 = prompt("Введите обязательную статью расходов в этом месяце","");
let howMuch2 = prompt("Во сколько обойдется?","");


let appData = {
    budget: money,
    timeData: time,
    expenses: {
        majorInMonth : howMuch
        },
    income:[],
    savings: false,
};

let oneDay = (money - howMuch - howMuch2) / 30;

alert(oneDay);