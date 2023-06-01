// global variables
let currentNum = "";
let previousNum = "";
let operator = "";

// DOM elements we want to manipulate

const currentDisplayNum = document.querySelector(".currentDisplayNum");
const previousDisplayNum = document.querySelector(".previousDisplayNum");

const equal = document.querySelector(".equals");

const decimal = document.querySelector(".decimal");

const clear = document.querySelector(".clear");

const numPad = document.querySelectorAll(".numpad , .numpad-zero");

const operators = document.querySelectorAll(".operator")

// event listners

numPad.forEach(btn =>{
    btn.addEventListener("click", (e) =>{
        handleNumPad(e.target.value)
    })
})

operators.forEach(btn => {
    btn.addEventListener("click", (e) =>{
        handleOperator(e.target.value)
    })
});

equal.addEventListener("click", calculate);

// functions
function handleNumPad(number){
    if(currentNum.length <= 11){       
        currentNum += number;
        currentDisplayNum.textContent = currentNum;
    }
}

function handleOperator(op){
    operator = op;
    previousNum = currentNum;
    previousDisplayNum.textContent = previousNum + " " + operator;
    currentNum = "";
    currentDisplayNum.textContent = "";
}

function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if(operator === "+"){
        previousNum += currentNum;
    }
    else if(operator === "x"){
        previousNum *= currentNum
}
    else if(operator === "/"){
        if(currentNum <=0){
            previousNum = "Error"
            displayResults();
            return
        }
        previousNum /= currentNum;
    }
    else if(operator === "-"){
        previousNum -= currentNum;
    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

function displayResults(){
    previousDisplayNum.textContent = "";
    operator = "";
    if (previousNum.length <= 11){
        currentDisplayNum.textContent = previousNum;
    }
    else{
        currentDisplayNum.textContent = previousNum.slice(0,11) + "...";
    }
}

function roundNumber(num){
    return Math.round(num * 100000) / 100000;
}
