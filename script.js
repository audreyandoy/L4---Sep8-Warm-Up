var num1;
var num2;

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
  
  

    // else if (num1 !== null && num2 !== null) {
    //     num1 = num;
    //     console.log("num1", num1)
    // }
    // document.getElementsByClassName("num").innerHTML = "You clicked me!";

    // num1 = 1;
    // console.log(num1)

    // console.log(document.getElementsByClassName("num")[2].innerHTML)
    



