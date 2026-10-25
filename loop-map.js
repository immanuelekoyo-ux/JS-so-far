const students = [
    { name: 'Alex', score: 85 },
    { name: 'Sam', score: 42 },
    { name: 'Jordan', score: 78 },
    { name: 'Taylor', score: 90 },
    { name: 'Casey', score: 55 }
];

// Class Assignment: If Statements, Ternary Operators, For Loops, and While Loops
//
// Create a student grade checker for five students.
//
// Requirements:
// 1. Create an array containing five student names and an array containing their
//    corresponding test scores.
// 2. Use a for loop to visit every student and display their name and score.
// 3. Use an if statement to display "Pass" when a score is 50 or higher and
//    "Needs Improvement" when the score is below 50.
// 4. Use a ternary operator to display "Excellent" when a score is 80 or higher;
//    otherwise display "Keep Practicing".
// 5. Use a while loop to count and display how many students passed.
// 6. At the end, display the total number of students who passed.

//1.
const studentData = students.map((student) =>{
    console.log(student.name , student.score);
    // const grades = student.score
    const IsPassed = student.score >= 50 ? `${student.name} => ${student.score} Passed` : `${student.name} => ${student.score} failed`;
    console.log(IsPassed);
    
    const results = student.score >= 80 ? `${student.name} => ${student.score} Excellent` : `But ${student.name} Still Needs Practicing`;
    console.log(results);

    return IsPassed
 })
// const scores = students.map((score) => score.score);

console.log(studentData);
// console.log(scores);

//5
const studentsWhoPassed = students.map((student) =>{
    if (student.score >= 50){
        return student.name  
    }
})
console.log(studentsWhoPassed)
    
//BONUS
//Average formula = (sum of all scores) / (number of scores)

// const average = students.map((student) => {
    
// })