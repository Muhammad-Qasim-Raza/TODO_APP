let display = document.getElementById('display');

function appendValue(value) {
    display.value += value;
}

function calculate() {
    try {
        display.value = eval(display.value.replace('÷', '/').replace('×', '*'));
    } catch (error) {
        display.value = 'Error';
    }
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}