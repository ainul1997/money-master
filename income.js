document.getElementById("calculate-button").addEventListener('click', function () {
    //    calculate Input
    const foodInput = document.getElementById("food-input");
    const rentInput = document.getElementById("rent-input");
    const clothesInput = document.getElementById("clothes-input");

    const expenses = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);

    const expensesTotal = document.getElementById("expenses-total");
    console.log(expensesTotal.innerText);
    expensesTotal.innerText = expenses;


})