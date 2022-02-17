document.getElementById("calculate-button").addEventListener('click', function () {


    //calculate Input

    const foodInput = document.getElementById("food-input");
    const rentInput = document.getElementById("rent-input");
    const clothesInput = document.getElementById("clothes-input");

    //calculate total
    const expenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
    const expensesTotal = document.getElementById("expenses-total");
    expensesTotal.innerText = expenses;

    // income and expenses calculate

    const incomeInput = document.getElementById("income-input");
    const balance = parseFloat(incomeInput.value) - expenses;
    const balanceAmount = document.getElementById("balance-amount");
    balanceAmount.innerText = balance;

    // saving Amount


})

document.getElementById("saving-button").addEventListener('click', function (ainul) {
    const savingInput = document.getElementById("saving-input");
    const incomeInput = document.getElementById("income-input");

    const saveMoney = parseFloat(incomeInput.value) / 100;
    const saveMoneyValue = saveMoney;

    const savingAount = parseFloat(savingInput.value) * saveMoneyValue;
    const savingAountValue = document.getElementById("saving-amount");
    savingAountValue.innerText = savingAount;

    // Remaining Balance
    const balanceAmount = document.getElementById("balance-amount");
    const remaining = parseFloat(balanceAmount.innerText) - parseFloat(savingAountValue.innerHTML);
    const remainingBalance = document.getElementById("remaining-balance");
    remainingBalance.innerText = remaining;

    if (savingInput = 'string') {
        alert('lkhgwriouwrhhg');
    }

})
