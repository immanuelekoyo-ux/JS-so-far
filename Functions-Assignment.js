/* ============================================================
    BEGINNER FUNCTION ASSIGNMENT
    ============================================================
    Create a small "Student Report" program using functions.

    Requirements:

    1. Write a function declaration called introduceStudent(name).
        It should console.log a greeting containing the student's name.
        Call it at least two times with different names.

    2. Write a function expression called calculateTotal(first, second).
        It should return the sum of the two numbers.
        Store the returned value in a variable and console.log it.

    3. Write an arrow function called calculateAverage(score1, score2, score3).
        It should return the average of the three scores.
        Call it with three scores and display the answer.

    4. Write a function called checkGrade(score) that uses an if/else
        statement and returns:
          - "Excellent" for scores from 80 to 100
          - "Pass" for scores from 50 to 79
          - "Needs Improvement" for scores below 50
        Call the function with at least three different scores.

    5. Write a function called isEven(number) that uses a ternary operator
        to return "Even" or "Odd". Test it with two numbers.

    6. Write a function called applyDiscount(price, discountPercentage).
        It should calculate and return the discounted price. Use the formula:
          price - (price * discountPercentage / 100)
        Display the result for an item costing 200 with a 15% discount.

    7. Write an anonymous function inside setTimeout that logs
        "Report complete" after 2 seconds.

    Bonus:
        Create an array of five scores. Use a for loop to calculate the total,
        then use a while loop to count how many scores are 50 or higher.

    Do not copy the examples above. Use your own names, values, and messages.
    ============================================================ */

//1
 function introduceStudent (name) {
    console.log('Hello' + name);
}
introduceStudent(' Moses');
introduceStudent(' Victor');

//2
let calculateTotal = function(first, second) {
    let answer = first + second;
    return answer;
}
let sum = calculateTotal(10, 20);
console.log(sum);

//3
let calculateAverage = (score1, score2, score3) => {
    let average = (score1 + score2 + score3) / 3;
    return average;
}
console.log(calculateAverage(80, 90, 70));

//4
function checkGrade(score) {
    if (score >= 80 && score <= 100) {
        return "Excellent";
    } else if (score >= 50 && score <= 79) {
        return "Pass";
    } else {
        return "Needs Improvement";
    }
}
console.log(checkGrade(85));
console.log(checkGrade(65));
console.log(checkGrade(45));

//5
function isEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}
console.log(isEven(4));
console.log(isEven(7));

//6
function applyDiscount(price, discountPercentage) {
    let discountedPrice = price - (price * discountPercentage / 100);
    return discountedPrice;
}
console.log(applyDiscount(200, 15));

//7
setTimeout(function() {
    alert("Report complete");
}, 2000);