//let capitalize = function (word) {
   // console.log(word.charAT(0).toUPperCase() + word.slice(1))
//}
//capitalize("morning")

function capitalize(word) {
    console.log(word.charAt(0).toUpperCase() + word.slice(1));
}

capitalize("morning");
capitalize("javaScript")

//CALCULATE RECTANGLE AREA

function rectangleArea(length, width){
    return length * width;
}
console.log(rectangleArea(10, 3));

//EVEN OR ODD
function CheckNumber(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(CheckNumber(15))

//DISCOUNT CALCULATOR
function calculateDiscount( price, discountpercentage) {
    return price * discountpercentage / 100;
}
console.log(calculateDiscount(50, 10))

//FINAL PRODUCT PRICE
function finalprice(price, discounPercentage) {
    let discount = price * discounPercentage / 100;
    return price - discount;
}
console.log(finalprice(100, 20))

//ASSIGNMENT
function totalprice(price , quantity) {
 return price * quantity;
}
console.log(totalprice(5000, 4));

//CUSTOMER'S DISCOUNT
function customersdiscount(price, discountpercentage) {
    return price * discountpercentage / 100;
}
console.log(customersdiscount(2000, 20));

//STUDENT'S AVERAGE SCORE
function averagescore(s1, s2, s3) {
    return s1 + s2 + s3 / 3;
}
console.log(averagescore(10, 20, 30));

//STUDENT'S GRADE
function grade(score) {
    return score >= 70 ? "A" :
             score >= 60 ? "B" :
             score >= 50 ? "C" :
             score >= 45 ? "D" :
    "F" ;
}
console.log(grade(75));

//NAIRA TO DOLLAR
function nairaToDollars(naira) {
    return naira / 1347.26;
}

console.log(nairaToDollars(15000));

//CELSIUS TO FAHRENHEIT
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(celsiusToFahrenheit(25));

//AMOUNT AFTER ADDING INTEREST
function calculateInterest(amount, interestPercentage) {
    let interest = amount * interestPercentage / 100;
    return amount + interest;
}

console.log(calculateInterest(50000, 10));

//TOTAL COST
function shoppingCart(item1, item2, item3) {
    return item1 + item2 + item3;
}

console.log(shoppingCart(5000, 3000, 7000));

//DELIVERY FEE
function deliveryFee(orderAmount) {
    return orderAmount < 20000 ? 2000 :
        orderAmount < 50000 ? 1000 :
            0;
}

console.log(deliveryFee(30000));


