//Arithmetic operators

console.log("------------------------");
let myMoneyInHand = 7310;
let totalBill: number = 0; //our total bill

//add items
const oilPrice: number = 5250;
const ricePrice: number = 2000;
const sugerPrice: number = 600;
const saltPrice: number = 60;

//calculate total bill
totalBill = oilPrice + ricePrice + saltPrice + sugerPrice;

//print total bill
console.log("Your total bill is=", totalBill);

//Calculate how much more money we need to pay
let howMuchMoreMoneyWeNeedToPay: number = totalBill - myMoneyInHand;

//print how much more money we need to pay
console.log("You have to pay=", howMuchMoreMoneyWeNeedToPay);

console.log("-------------------------");

//Exponent of 2 is 4 means 4*4*4*4
console.log("Exponent operator=", 2 ** 4);

console.log("------------------------");

//Increment
myMoneyInHand++; //post Increment
console.log("My money in hand now=", myMoneyInHand);

console.log(myMoneyInHand++); //post increment
console.log(myMoneyInHand);
console.log(++myMoneyInHand); //pre increment

console.log("-----------------");

//Assignment operators

myMoneyInHand += 700;
console.log("Total money in hand after adding 700=", myMoneyInHand);

console.log("------------------------");

//Comparision operators

let myFacebookPasswordInDatabase: number = 12345;
let myFacebookPasswordWhichIUseInLogin: any = "12345";

console.log(
  "Line 55:",
  myFacebookPasswordInDatabase == myFacebookPasswordWhichIUseInLogin
); //compare value
console.log(
  "Line 56:",
  myFacebookPasswordInDatabase === myFacebookPasswordWhichIUseInLogin
); //compare value and type

console.log(
  "Line 58:",
  myFacebookPasswordInDatabase != myFacebookPasswordWhichIUseInLogin
); //not equal value
console.log(
  "Line 59:",
  myFacebookPasswordInDatabase !== myFacebookPasswordWhichIUseInLogin
); //not equal value and type

console.log("-------------------------");

//JavaScript String Addition

let text1 = "Fiza";
let text2 = "Awan";
let text3 = text1 + " " + text2;
console.log(text3);

console.log("-------------------------");
