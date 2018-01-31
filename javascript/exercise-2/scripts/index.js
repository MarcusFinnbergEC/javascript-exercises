let input = prompt("Please enter a number: ");
let number = input;
let result = Math.sqrt(number);
if (number <= 0) {
    console.log("Please enter a number, it has to be higher than 0.")
}
else {
    console.log("The square number of " + number + " is: " + result);
    prompt("The square number of " + number + " is: " + result);
}