/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(num1,num2){
    return num1 + num2;
}



let sumButton = document.querySelector("#addNumbers");


sumButton.addEventListener("click", function(){

    let number1 = Number(document.querySelector("#add1").value);
    let number2 = Number(document.querySelector("#add2").value);


    document.querySelector("#sum").value = add(number1,number2);
});

/* Function Expression - Subtract Numbers */
function sub(num1,num2){
    return num1 - num2;
}



let subButton = document.querySelector("#subtractNumbers")

subButton.addEventListener("click", function(){

    let number1 = Number(document.querySelector("#subtract1").value);
    let number2 = Number(document.querySelector("#subtract2").value);

    document.querySelector("#difference").value = sub(number1,number2);


})

/* Arrow Function - Multiply Numbers */
let mult = (num1,num2) => {
    return num1 * num2
};

multButton = document.querySelector("#multiplyNumbers");

multButton.addEventListener("click", function(){

    let number1 = Number(document.querySelector("#factor1").value);
    let number2 = Number(document.querySelector("#factor2").value);

    document.querySelector("#product").value = mult(number1,number2);

} )
/* Open Function Use - Divide Numbers */

let divide = (num1,num2) =>{
    return num1 / num2;
}

divideButton = document.querySelector("#divideNumbers");

divideButton.addEventListener("click", function(){

    let number1 = Number(document.querySelector("#dividend").value);
    let number2 = Number(document.querySelector("#divisor").value);

    document.querySelector("#quotient").value = divide(number1,number2);
})
/* Decision Structure */

let discount = (num,pct) => { return num - (num * pct) };

let getTotalDueButton = document.querySelector("#getTotal");

getTotalDueButton.addEventListener("click", function(){

    let member = document.querySelector("#member").checked;
    let subTotal = Number(document.querySelector("#subtotal").value);
    

    if (member){
        document.querySelector("#total").textContent = discount(subTotal,.15);
    }
    else
    {
        document.querySelector("#total").textContent = subTotal; 
    }
})


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */

let NumberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector("#array").innerHTML = NumberArray;

/* Output Odds Only Array */
let oddsArry = NumberArray.filter(num => num % 2 !== 0);
document.querySelector("#odds").innerHTML = oddsArry;

/* Output Evens Only Array */
let evenArray = NumberArray.filter( num => num % 2 == 0);
document.querySelector("#evens").innerHTML = evenArray;

/* Output Sum of Org. Array */
let sumArray = NumberArray.reduce((sum, num) => sum + num);
document.querySelector("#sumOfArray").innerHTML = sumArray;

/* Output Multiplied by 2 Array */
let multArray = NumberArray.map(num => num * 2);
document.querySelector("#multiplied").innerHTML = multArray;

/* Output Sum of Multiplied by 2 Array */
let sumMultArray = multArray.reduce((sum,num) => sum + num);
document.querySelector("#sumOfMultiplied").innerHTML = sumMultArray;