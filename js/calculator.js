var calc = function(){
    var input1 = prompt("What is your first number?");
    var input2 = prompt("What is your second number?");
    var num1 = parseInt(input1, 0);
    var num2 = parseInt(input2, 0);
    
    if(isNaN(num1) === true || isNaN(num2) === true){
        alert("Please input two numbers. Click the button to try again!");
    } else {
        var action = prompt("What would you like to do with these numbers?");
        
        var add = function(num1, num2){
            return num1+num2;
        };
        var sub = function(num1, num2){
            return num1-num2;
        };
        var mult = function(num1, num2){
            return num1*num2;
        };
        var div = function(num1, num2){
            return num1/num2;
        };
        var mod = function(num1, num2) {
            return num1%num2;
        };
        
        if(action === 'add'){
            alert(add(num1, num2));
        } else if(action === 'subtract'){
            alert(sub(num1, num2));
        } else if(action === 'multiply'){
            alert(mult(num1, num2));
        } else if(action === 'divide'){
            alert(div(num1, num2));
        } else if(action === 'modulo'){
            alert(mod(num1, num2));
        }
        else {
            alert("Please input a valid action! Try 'add', 'subtract', 'multiply', or 'divide'.");
        }
    }
};

$(document).ready(function(){
    $('#button').click(function(){
        calc();
    });
});