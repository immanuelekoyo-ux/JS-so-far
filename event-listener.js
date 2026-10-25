//click event
function displaymessage () {
    console.log('working');
}
//displaymessage
let score = 0;
function increase () {
    console.log(score);
    score++;
}

let score1 = 0;
function decrease () {
    console.log(score1);
    score1--;
}

let cartquantity = 0;
function addtocart() {
    cartquantity++
    console.log('cart quantity:' + cartquantity);
}

function removefromcart() {
    if (cartquantity > 0){
        cartquantity--;
    }else{
        cartquantity = 0
    }
    console.log('cart quantity:' + cartquantity);
}

//double click event
function dbclick() {
    console.log('user Double Click')
}

//mouse over event
function hover (){
    console.log('user hover')
}

//key up event
function display(){
    console.log('keyup');
}

//load event
function loading(){
    console.log('loading...');
}

function toggletext(){
    if(this.innerHTML == 'subscribe'){
        this.innerHTML = 'unsubscribe';
    }else{
        this.innerHTML == 'subscribe' 
    }
}

//create a function to calculate age
//function cal(a, b){
//    let sum = a + b;
 //   console.log(sum);
//}
//cal(4, 6)
//class work
//create a function to check if the user input is a vowel or consonant
function checkletter(letter) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    if (letter == vowels[0] || letter == vowels[1] || letter == vowels[2] || letter == vowels[3] || letter == vowels[4]) {
        console.log(letter + " is a vowel");
    }else{
        console.log(letter + " is a consonant");
    }
}
checkletter('a');
checkletter('b');

function checkVowels(char){
    if(char == 'a'){
        console.log('the user input:' + char + 'is vowel')
    }else if(char == 'e'){
        console.log('the user input:' + char + 'is vowel')
    }else if(char == 'i'){
        console.log('the user input:' + char + 'is  vowel')
    } else if (char == 'o') {
        console.log('the user input:' + char + 'is vowel')
    } else if (char == 'u') {
        console.log('the user input:' + char + 'is vowel')
    } else{
        console.log('the user input:' + char + 'is consonant')
    }
   
}
checkVowels('a')
checkVowels('b')


//onload event
window.onload = function () {
    console.log('page is loaded');
}

//DOM- Document Object Model
console.log(document.querySelector('h1'));
console.log(document.getElementById('wording')) 