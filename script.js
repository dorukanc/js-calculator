function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

const display = document.getElementById("display");
const keypad = document.querySelector(".keypad");

keypad.addEventListener('click', function(event){
    if (event.target.tagName !== 'BUTTON') return;
    const val = event.target.dataset.value;
    display.textContent += val;
});


function operate(num1, num2, operator){
    switch(operator){
        case 'add':
            // add the numbers and update the display
            display.textContent = add(num1, num2);
            break;
        case 'subtract':

            break;
        case 'multiply':

            break;
        case 'divide':

            break;
    }
}

