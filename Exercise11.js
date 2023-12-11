/* Program to check the name is in guest list */

let guestList = ["nehal","zayna","ateeba","umar","shadmam","sania","shahrose","saad"];
let x = prompt("Check your name by typing your name");
if(x = guestList.includes(x)){
    console.log("You are in the party");
}
else {
    console.log("You are not invited");
}