const headerText = document.querySelectorAll('.header');

console.log(headerText)
console.log(headerText[1].textContent = 'Hello, World!');

const container = document.querySelector('.container');


// container.textContent = '<h1>Digital World Tech Academy</h1><br><p>Learn to code and become a web developer</p>'
container.innerHTML = '<h1 style="color: blue;">Digital World Tech Academy</h1><br><p>Learn to code and become a web developer</p> <br> <button onclick="alert(\'Button clicked!\')">Click me</button>'
console.log(container)

const inputValue = document.querySelector('#myInput');
const changeButton = document.querySelector('#changeButton');

function revealInputValue() {
    let inputValueText = inputValue.value;
    console.log(inputValueText);
    container.textContent = inputValueText;
}