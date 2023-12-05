/* BMI calculator */

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

var cal = bmiCalculator(65, 1.8);
console.log(cal);
