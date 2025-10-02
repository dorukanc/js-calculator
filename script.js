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

let data = {
        'num1': '',
        'num2': '',
        'operator': '',
    }

keypad.addEventListener('click', function(event){
    if (event.target.tagName !== 'BUTTON') return;

    const val = event.target;

    if(val.className === 'digit'){
        display.textContent += val.dataset.value;
        if(data.num1 !== '' && data.operator !== ''){
           data.num2 = parseFloat(display.textContent); 
           console.log(data);
        }else{
            data.num1 = parseFloat(display.textContent); // num1
            console.log(data);
        }
    }else{
        if(data.operator !== ''){
            data.num1 = operate(data.num1, data.num2, data.operator);
            display.textContent = data.num1;
            val.dataset.value === 'equal' || function(){ data.operator = val.dataset.value; };
            console.log(data);
        }else{
            data.operator = val.dataset.value;
            display.textContent = '';
            console.log(data);
        }
    }
    

    
});


function operate(num1, num2, operator){
    switch(operator){
        case 'add':
            return add(num1, num2);
            break;
        case 'subtract':
            return subtract(num1, num2);
            break;
        case 'multiply':
            return multiply(num1, num2);
            break;
        case 'divide':
            return divide(num1, num2);
            break;
    }
}

