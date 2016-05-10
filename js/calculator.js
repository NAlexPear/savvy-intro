var add = function(num1, num2){
    return parseInt(num1, 10) + parseInt(num2, 10);
};
var sub = function(num1, num2){
    return num1 - num2;
};
var mult = function(num1, num2){
    return num1 * num2;
};
var div = function(num1, num2){
    return num1 / num2;
};
var mod = function(num1, num2) {
    return num1 % num2;
};

var parseNumbers = function(){
    var input1 = prompt("What is your first number?");
    var input2 = prompt("What is your second number?");
    var num1 = parseInt(input1, 10);
    var num2 = parseInt(input2, 10);
    
    if(isNaN(num1) === true || isNaN(num2) === true){
        alert("Please input two numbers. Click the button to try again!");
    } else { 
        return [ input1, input2 ];
    }
};

var parseOperation = function( action, num1, num2 ){
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
    } else {
        alert("Please input a valid action! Try 'add', 'subtract', 'multiply', or 'divide'.");
    }
};

var calc = function(){
    var input = parseNumbers();
    var action = "";
    var num1;
    var num2;
    
    if( input ){
        num1 = input[0];
        num2 = input[1];
        action = prompt("What would you like to do with these numbers?");
        
        parseOperation( action, num1, num2 );
    }
};

var button = document.querySelector("#calculate");
button.addEventListener("click", function(){
    calc();
});