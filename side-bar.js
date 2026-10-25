const sideBar = document.querySelector('.side-bar');
const toggleButton = document.querySelector('.sidebar-toggle');
const closeButton = document.querySelector('.close-btn');

console.log(toggleButton);
console.log(sideBar);

toggleButton.addEventListener('click', function () {
    sideBar.classList.add('show-sidebar');
    console.log('hello')
    
});


closeButton.addEventListener('click', function () {
    sideBar.classList.remove('show-sidebar');
});
