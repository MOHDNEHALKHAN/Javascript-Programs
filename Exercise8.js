/* MAth.random() using if statement and operator */

prompt("Write your name");
prompt("Write your crush name");

let loveScore = Math.random() * 100 ;
loveScore = Math.floor(loveScore) + 1;
if(loveScore > 70)
{
alert("Your love score with your crush is " + loveScore + "% & which is better");
}
if(loveScore > 30 && loveScore <= 70)
{
alert("Your love score with your crush is " + loveScore + "% & which is good");
}
if(loveScore <= 30)
{
alert("Your love score with your crush is " + loveScore + "%");
}