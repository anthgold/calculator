
/*===Calculator Functions
====================================*/

var add = function(number1, number2) {
	return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));

var number2 = parseInt(prompt("Enter another number:"));

var result = divide(number1, number2);

alert(result);

/*===BMI Functions
====================================*/

var userBmi = function(weight,height) {
	return (weight * 703) / (height * height);
};

var weight = parseInt(prompt("How much do you weight?"));

var height = parseInt(prompt("How tall are you?"));

var result = userBmi(height,weight);

alert("Your BMI is " + result.toPrecision(4) + ".");

/*===Temperature Functions
====================================*/

var temp = parseInt(prompt("Enter Fahrenheit to convert to Celcius"));

var fToC = function(temp) {
	return temp * (9/5) + 32
};

var cToF = function(temp) {
	return (temp - 32) * (5/9);
};

var result = cToF(temp);

alert(result.toPrecision(3));

/*===Unit conversion Functions
====================================*/
