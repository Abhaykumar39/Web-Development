// variables and operator with food percentage calculator
const prompt = require("prompt-sync")();

let food = prompt("enter the amount of food: ");
let tip_percentage = prompt("enter the tip percentage of the food: ") / 100;
food_amount = food * tip_percentage;
total=food+food_amount;
console.log(total);
console.log(food_amount);

Number=prompt("enter the number");
if(Number%5==0)
{
    console.log("number is multiple of 5");
}
else{
    console.log("number is not multiple of 5");
}
