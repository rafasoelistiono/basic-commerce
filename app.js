const hamburger = document.querySelector(".toggle");
const navLinks = document.querySelector("header ul");
const links = document.querySelectorAll("header ul li")

const texts = [`Websites`, `Commerce`,`Work`];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.typing').textContent = letter;
    if(letter.length === currentText.length){
        count++;
        index = 0;
    }
    setTimeout(type, 400);
})();

function toggle(){
    var header = document.getElementById('header')
    header.classList.toggle('active')
    navLinks.classList.toggle("active");
    links.forEach(link => {
        link.classList.toggle("open")
    })
}

function remove(){
    var header = document.getElementById('header')
    header.classList.toggle('active')
    links.forEach(link => {
        link.classList.remove("open")
    })
}



document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
        if (scroll_position > 500) {
            header.style.backgroundColor = '#1c1f4c';
        } else {
            header.style.backgroundColor = 'transparent';
        }
});
