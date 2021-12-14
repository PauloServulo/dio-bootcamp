var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;
var buttonIncrement = document.getElementById('adicionar');
var buttonDecrement = document.getElementById('subtrair');
var maxCount

function increment() {
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 0) {
        currentNumberWrapper.style.color = 'black';
    }
}

function decrement() {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber < 0) {
        currentNumberWrapper.style.color = 'red';
    }
}

if(buttonIncrement) {
    buttonIncrement.addEventListener("click", increment)
}

if(buttonDecrement) {
    buttonDecrement.addEventListener("click", decrement)
}
