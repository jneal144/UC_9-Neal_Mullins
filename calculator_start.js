var currentInput = "0";
var memory = "0";
var operator = 0;
var sto = "0";
var pi = Math.PI;
var angMode = 0;

function displayCurrentInput() {
    document.getElementById('screen').value = currentInput;
}

function addDigit(dig) {
    if (currentInput.length < 16) {
        if ((eval(currentInput) == 0) && (currentInput.indexOf(".") == -1)) {
            currentInput = dig;
        }
        else {
            currentInput = currentInput + dig;
        }
    }
    displayCurrentInput();
}

function addDecimal() {
    if (currentInput.length == 0) {
        currentInput = "0.";
    }
    else {
        if (currentInput.indexOf(".") == -1) {
            currentInput = currentInput + ".";
        }
    }
    displayCurrentInput();
}

function allClear() {
    currentInput = "0";
    operator = 0;
    memory = "0";
    displayCurrentInput();
}

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
    memory = currentInput;
    currentInput = "0";
    displayCurrentInput();
}

function calculate() {
    if (operator == 1) {
        currentInput = eval(memory) * eval(currentInput);
    };
    if (operator == 2) {
        currentInput = eval(memory) / eval(currentInput);
    };
    if (operator == 3) {
        currentInput = eval(memory) + eval(currentInput);
    };
    if (operator == 4) {
        currentInput = eval(memory) - eval(currentInput);
    };
    if (operator == 5) {
        currentInput = Math.pow((eval(memory)), (eval(currentInput)));
    }
    operator = 0;
    memory = "0";
    zeroErr();
    displayCurrentInput();
}

function changeSign() {
    currentInput = currentInput * -1;
    displayCurrentInput();
}

function Clear() {
    currentInput = "0";
    displayCurrentInput();
}

function percentage() {
    currentInput = currentInput / 100;
    displayCurrentInput();
}

function factorial() {
    var res = currentInput;
    if (currentInput == 0) {
        res = 1
    }
    else if (currentInput > 0) {
        for (i = currentInput - 1; i > 0; i--) {
            res = res * i;
        }
    }
    else if (currentInput < 0) {
        res = "ERROR";
    }
    currentInput = res;
    displayCurrentInput();
}

function square() {
    var x = currentInput;
    currentInput = Math.pow(x, 2);
    displayCurrentInput();
}

function squareRoot() {
    currentInput = Math.pow(currentInput, 1 / 2);
    displayCurrentInput();
}

function inverse() {
    currentInput = 1 / currentInput;
    displayCurrentInput();
}

function zeroErr() {
    if (currentInput == Infinity) {
        currentInput = "ERROR: Divide by 0!";
        displayCurrentInput();
    }
}

function memoryStore() {
    sto = currentInput;
    Clear();
    displayCurrentInput();
}

function memoryRecall() {
    currentInput = sto;
    displayCurrentInput();
}

function memoryAdd() {
    currentInput = eval(sto) + eval(currentInput);
    memoryStore();
    displayCurrentInput();
}

function memorySub() {
    currentInput = eval(sto) - eval(currentInput);
    memoryStore();
    displayCurrentInput();
}

function setPi() {
    currentInput = pi;
    displayCurrentInput()
}

function angleMode() {
    if (angMode == 0) {
        angMode = 1;
    }
    else {
        angMode = 0;
    }
}

function sine() {
    if (angMode == 1) {
        var num = currentInput * (pi / 180);
        currentInput = Math.sin(num);
    }
    else {
        currentInput = Math.sin(currentInput);
    }
    displayCurrentInput();
    checkZero();
}

function cosine() {
    if (angMode == 1) {
        var num = currentInput * (pi / 180);
        currentInput = Math.cos(num);
    }
    else {
        currentInput = Math.cos(currentInput);
    }
    displayCurrentInput();
    checkZero();
}

function tangent() {
    if (angMode == 1) {
        var num = currentInput * (pi / 180);
        currentInput = Math.tan(num);
    }
    else {
        currentInput = Math.tan(currentInput);
    }
    displayCurrentInput();
    checkZero();
}

function checkZero() {
    if (currentInput < Math.pow(10, -10) && currentInput > 0) {
        currentInput = 0;
    }
    else if (currentInput > (Math.pow(10, -10) * -1) && currentInput < 0) {
        currentInput = 0;
    }
    displayCurrentInput();
}
