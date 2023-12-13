/* Program to generate random number from given array */

var names = ["Angelina", "Ateeba", "Zayna", "sadia"];

function whoIspaying(names){

    var numberOfPeople = names.length;
    var randomPersonPosition = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonPosition];

    return randomPerson + " will have to pay the bill";
    
}

console.log(whoIspaying(names));