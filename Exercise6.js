/* Random number generator */

prompt("Write your name");  // test this exercise in browser console
prompt("Write your crush name");

let loveScore = Math.random() * 100 ;
loveScore = Math.floor(loveScore) + 1;
alert("Your love score with your crush is " + loveScore + "%");