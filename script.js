var num1;
var num2;
var operator;

function add() {
    var sum = num1 + num2
    console.log(sum);

    num1 = null;
    num2 = null;

    document.getElementById("sum").innerHTML = sum;
}

function clicked(num) {
    if (num1 == null) 
    {
        num1 = num;
        console.log("num1", num1);
    }

    else if (num1 !== null && num2 == null){
        num2 = num;
        console.log("num2", num2)
    }
}

function setOperator(op) {
    operator = op
    console.log(operator)
}

function getOperator() {
    if (operator == "+") {
        add()
    }
}

// finish getOperator function and subtract, multiply, and divide functions













