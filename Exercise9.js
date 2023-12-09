/* BMI calculator using if else statement*/

function bmiCalculator(weight, height) {
    var BMI = weight / (height * height);

    if (BMI < 18.5) {
        return "Your BMI is " + BMI + ", so you are underweight.";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
        return "Your BMI is " + BMI + ", so you have a normal weight.";
    } else {
        return "Your BMI is " + BMI + ", so you are overweight.";
    }
}

// Example usage:
var weight = 70; // replace with the user's weight
var height = 1.75; // replace with the user's height
var result = bmiCalculator(weight, height);
console.log(result); // This will display the BMI message 