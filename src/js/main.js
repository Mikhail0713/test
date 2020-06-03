// Задание №2
let beginPayment = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('.budget-value'),
    dayBudgetValue = document.getElementsByClassName('.daybudget-value'),
    levelValue = document.getElementsByClassName('.level-value'),
    expensesValue = document.getElementsByClassName('.expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('.optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('.income-value'),
    monthSavingsValue = document.getElementsByClassName('.monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('.yearsavings-value'),
    

    input = document.getElementsByClassName('.expenses-item'),

    approve = document.getElementsByTagName('button')[0],
    approveExt = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],

    unneccesaryExpensive = document.querySelectorAll('.optionalexpenses-item'),

    incomeItem = document.querySelector('.choose-income'),
	checkSavings = document.querySelector('#savings'),
	sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.getElementsByClassName('.year-value'),
    monthValue = document.getElementsByClassName('.month-value'),
    dayValue = document.getElementsByClassName('.day-value');