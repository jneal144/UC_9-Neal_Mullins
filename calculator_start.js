var current_input = "0";
var memory = "0";
var operator = 0;
var sto = "0";
var pi = Math.PI;
var angle_mode = 0;
/**
 * Displays the calculator input on the screen.
 */
function displayCurrentInput() {
    document.getElementById('screen').value = current_input;
}
/**
 * Allows digits clicked to be displayed in the current input.
 * @param {string} dig Digit to be added to current input string.
 */
function addDigit(dig) {
    if (current_input.length < 16) {
        if ((eval(current_input) == 0) && (current_input.indexOf(".") == -1)) {
            current_input = dig;
        }
        else {
            current_input = current_input + dig;
        }
    }
    displayCurrentInput();
}
/**
 * Adds decimal point to current input string.
 */
function addDecimal() {
    if (current_input.length == 0) {
        current_input = "0.";
    }
    else {
        if (current_input.indexOf(".") == -1) {
            current_input = current_input + ".";
        }
    }
    displayCurrentInput();
}
/**
 * Clears calculator memory and current input.
 */
function allClear() {
    current_input = "0";
    operator = 0;
    memory = "0";
    displayCurrentInput();
}
/**
 * Stores +, -, *, /, or ^ operators in memory.
 * @param {string} op denotes operator type
 */
function storeOperator(op) {
    if (op.indexOf("*") > -1) {
        operator = 1;
    };
    if (op.indexOf("/") > -1) {
        operator = 2;
    };
    if (op.indexOf("+") > -1) {
        operator = 3;
    };
    if (op.indexOf("-") > -1) {
        operator = 4;
    };
    if (op.indexOf("^") > -1) {
        operator = 5;
    };
    memory = current_input;
    current_input = "0";
    displayCurrentInput();
}
/**
 * Based on operator value, perform operation between stored value and current input.
 */
function calculate() {
    if (operator == 1) {
        current_input = eval(memory) * eval(current_input); //multiply
    };
    if (operator == 2) {
        current_input = eval(memory) / eval(current_input); //divide
    };
    if (operator == 3) {
        current_input = eval(memory) + eval(current_input); //add
    };
    if (operator == 4) {
        current_input = eval(memory) - eval(current_input); //subtract
    };
    if (operator == 5) {
        current_input = Math.pow((eval(memory)), (eval(current_input))); //raise to power
    }
    operator = 0;
    memory = "0";
    zeroErr();
    displayCurrentInput();
}
/**
 * Multiply current input by -1 and display.
 */
function changeSign() {
    current_input = current_input * -1;
    displayCurrentInput();
}
/**
 * Set current input to 0 and display.
 */
function Clear() {
    current_input = "0";
    displayCurrentInput();
}
/**
 * Divide current input by 100 and display.
 */
function percentage() {
    current_input = current_input / 100;
    displayCurrentInput();
}
/**
 * Calculate and display factorial of current input.
 */
function factorial() {
    var res = current_input;
    if (current_input == 0) { //special case 0!
        res = 1
    }
    else if (current_input > 0) {
        for (i = current_input - 1; i > 0; i--) { //factorial calculation
            res = res * i;
        }
    }
    else if (current_input < 0) {
        res = "ERROR";
    }
    current_input = res;
    displayCurrentInput();
}
/**
 * Calculate and display square of current input.
 */
function square() {
    var x = current_input;
    current_input = Math.pow(x, 2);
    displayCurrentInput();
}
/**
 * Calculate and display square root of current input.
 */
function squareRoot() {
    current_input = Math.pow(current_input, 1 / 2);
    displayCurrentInput();
}
/**
 * Calculate and display inverse of current input.
 */
function inverse() {
    current_input = 1 / current_input;
    displayCurrentInput();
}
/**
 * If current input equals infinity, display divide by zero error.
 */
function zeroErr() {
    if (current_input == Infinity) {
        current_input = "ERROR: Divide by 0!";
        displayCurrentInput();
    }
}
/**
 * Stores current input as var "sto"
 */
function memoryStore() {
    sto = current_input;
    Clear();
    displayCurrentInput();
}
/**
 * Sets current input to last stored value.
 */
function memoryRecall() {
    current_input = sto;
    displayCurrentInput();
}
/**
 * Adds current input to stored value; stores result.
 */
function memoryAdd() {
    current_input = eval(sto) + eval(current_input);
    memoryStore();
    displayCurrentInput();
}
/**
 * Subtracts current input from stored value; stores result.
 */
function memorySub() {
    current_input = eval(sto) - eval(current_input);
    memoryStore();
    displayCurrentInput();
}
/**
 * Sets current input to pi (3.1415...)
 */
function setPi() {
    current_input = pi;
    displayCurrentInput()
}
/**
 * Switches angle mode from 0 (radians) to 1 (degrees) and vice versa.
 */
function angleMode() {
    if (angle_mode == 0) {
        angle_mode = 1;
    }
    else {
        angle_mode = 0;
    }
}
/**
 * Based on angle mode, calculates sine of current input.
 */
function sine() {
    if (angle_mode == 1) {
        var num = current_input * (pi / 180);
        current_input = Math.sin(num);
    }
    else {
        current_input = Math.sin(current_input);
    }
    displayCurrentInput();
    checkZero();
}
/**
 * Based on angle mode, calculates cosine of current input.
 */
function cosine() {
    if (angle_mode == 1) {
        var num = current_input * (pi / 180);
        current_input = Math.cos(num);
    }
    else {
        current_input = Math.cos(current_input);
    }
    displayCurrentInput();
    checkZero();
}
/**
 * Based on angle mode, calculates tangent of current input.
 */
function tangent() {
    if (angle_mode == 1) {
        var num = current_input * (pi / 180);
        current_input = Math.tan(num);
    }
    else {
        current_input = Math.tan(current_input);
    }
    displayCurrentInput();
    checkZero();
}
/**
 * Checks if current input is within .0000000001 of 0. If true, set current input to zero.
 */
function checkZero() {
    if (current_input < Math.pow(10, -10) && current_input > 0) {
        current_input = 0;
    }
    else if (current_input > (Math.pow(10, -10) * -1) && current_input < 0) {
        current_input = 0;
    }
    displayCurrentInput();
}
