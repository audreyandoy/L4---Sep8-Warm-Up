var num1;
var num2;

function add(n1, n2) {
    var sum = n1 + n2
    console.log(sum);

    document.getElementById("sum").innerHTML = sum;
}

add(2,4)

function clicked(num) {
  

    if (num1 == null) {
        num1 = num;
        console.log("num1", num1);
    }

    else if (num1 !== null) {
        num2 = num;
        console.log("num2", num2)
    }

    // document.getElementsByClassName("num").innerHTML = "You clicked me!";

    // num1 = 1;
    // console.log(num1)

    // console.log(document.getElementsByClassName("num")[2].innerHTML)
    
}


