/* MAth.random() using if-else statement*/

prompt("Write your name");
prompt("Write your crush name");

let loveScore = Math.random() * 100 ;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 75)
{
alert("Your love score with your crush is " + loveScore + "% & which is good");
}
else
{
alert("Your love score with your crush is " + loveScore + "%");
}