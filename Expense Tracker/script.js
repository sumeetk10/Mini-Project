var DOMString = {
    addType: '.add-type',
    incomeIDSelected : '.inc',
    expenseIDSelected : '.exp',
    addDescription : '.description',
    addAmount : '.amount',
    addBtn : '.add-btn',
    incomeTitle : '.income-title',
    incomeList : '.income-list',
    expenseTitle : '.expense-title',
    expenseList : '.expense-list',
    incomeDisplay : '.netIncome',
    expenseDisplay : '.netExpense',
    nettDisplay : '.display'
}


var operVal = document.querySelector(DOMString.addType);
var descText = document.querySelector(DOMString.addDescription);
var amountText = document.querySelector(DOMString.addAmount);


var newIncome = document.querySelector(DOMString.incomeDisplay);
var newExpense = document.querySelector(DOMString.expenseDisplay);
var finalDisplay = document.querySelector(DOMString.nettDisplay);


function getOperator() {
    var operator;
    var val = operVal.value;
   
    if(val == "inc"){
        operator = '+'
    }else if(val == "exp"){
        operator = '-';
    }else{
        operVal.style.border = "1px solid red";
    }


    return operator;
}




function getDescription() {
    var description;  
    description = descText.value;
    return description;
}



function getAmount() {
    var amount;
    amount = amountText.value;
    return amount;
}

function resetValues(){
    operVal.value = '';
    descText.value = '';
    amountText.value = '';
}


function nettDisplay(income, expense){
    return (income-expense);
}


var incomeSum = 0,expenseSum = 0;
function addValues() {  


    var individualContainer = document.createElement('div');
    individualContainer.classList.add("individual-container");


    for(let i=0; i<3; i++) {
        var paraContainer = document.createElement('p');

        if(i == 0) {
            paraContainer.innerHTML = getOperator();
        }
        else if(i == 1) {
            if(getDescription() == ""){
                descText.style.border = "1px solid red";
                return false;
            }
            paraContainer.innerHTML = getDescription();
        }
        else{
            if(getAmount() == ""){
                amountText.style.border = "1px solid red";
                return false;
            }
            paraContainer.innerHTML = getAmount();
        }
       
        individualContainer.appendChild(paraContainer);
    }


    if(getOperator() == '+'){
        var listContainer = document.querySelector(DOMString.incomeList);
        listContainer.appendChild(individualContainer);


       
        incomeSum = incomeSum + parseInt(getAmount());
        newIncome.innerHTML = '+ ' +incomeSum;
       
        resetValues();
        if(nettDisplay(incomeSum, expenseSum) > 0) {
            finalDisplay.innerHTML = '+ '+nettDisplay(incomeSum, expenseSum);
        }
       
    }
    else if(getOperator() == '-'){
        var listContainer = document.querySelector(DOMString.expenseList);
        listContainer.appendChild(individualContainer);


       
        expenseSum = expenseSum + parseInt(getAmount());
        newExpense.innerHTML = '- ' + expenseSum;


        resetValues();
        finalDisplay.innerHTML = +nettDisplay(incomeSum, expenseSum);
    }
    else{
        alert("Select either Income or Expense");
    }


}
