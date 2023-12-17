/* To pass the function in a function */

// for addition
function add(num1,num2){
    return num1 + num2 ;
    }
    // for subtraction
    function subtract(num1,num2){
    return num1 - num2 ;
    }
    // for multiplication
    function multiply(num1,num2){
    return num1 * num2 ;
    }
    // for division
    function divide(num1,num2){
    return num1 / num2 ;
    }
    //function to pass the other function
    
    function Calculator(num1,num2,opr){
    return opr(num1,num2);
    }
    
    console.log(Calculator(2,7,add));