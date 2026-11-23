// Income Page
var incomeSourceInput = document.getElementById("incomeSource")
var incomeAmount = document.getElementById("incomeAmountInput")
var incomeCategory = document.getElementById("incomeCategoryInput")
var incomeSubmit = document.getElementById("incomeSubmit")

incomeSubmit.addEventListener("click", function(){
    event.preventDefault();
    incomeSourceInput = incomeSourceInput.value
    incomeAmount = incomeAmount.value
    incomeCategory = incomeCategory.value
    console.log(incomeSourceInput)
    console.log(incomeAmount)
    console.log(incomeCategory)
})