/* In this code the user name first character  will be capitalized and rest will be small */

let x = prompt("Write your name"); // test this exercise in browser console
let firstChar = x.slice(0,1);
let firstUpper = firstChar.toUpperCase();
let restName = x.slice(1, x.length);
restName = restName.toLowerCase();
let fullName = firstUpper + restName;
alert(fullName);