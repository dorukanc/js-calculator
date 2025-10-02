const display = document.getElementById("display");
const keypad = document.querySelector(".keypad");

let data = {
    'num1': '',
    'num2': '',
    'cache': '',
    'operator': '',
}

keypad.addEventListener('click', function(event){
    if (event.target.tagName !== 'BUTTON') return;

    const val = event.target;  
    if(val.className === 'digit'){
        handleDigit(val);
    }else if(val.className === 'operator'){
        handleOperator(val);
    }else if(val.className === 'equals'){
        handleEquals(val);
    }else if(val.className === 'clear'){
        handleClear(val);
    }


});


function handleDigit(val){
    display.textContent += val.dataset.value;
    if(data.operator !== ''){
        data.num2 = parseFloat(display.textContent);
        console.log(data);
    }else{
        data.num1 = parseFloat(display.textContent);
        console.log(data);
    }
}

function handleOperator(val){
    if(data.operator !== ''){
        data.cache = operate(data.num1, data.num2, data.operator);
        display.textContent = data.cache;
        console.log(data);
        data.num1 = data.cache;
        data.num2 = '';
        data.cache = '';
        data.operator = val.dataset.value;
        console.log(data);
    }else{
        data.operator = val.dataset.value;
        display.textContent = '';
        console.log(data);
    }
}

function handleEquals(val){
    data.cache = operate(data.num1, data.num2, data.operator);
    display.textContent = data.cache;
    data.num1 = data.cache;
    data.num2 = '';
    data.cache = '';
    data.operator = '';
    console.log(data);
}

function handleClear(val){
    data = {
        'num1': '',
        'num2': '',
        'cache': '',
        'operator': '',
    };
    display.textContent = '';
    console.log(data);
}


function operate(num1, num2, operator){
    switch(operator){
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            return num1 / num2;
    }
}

