import renderFront from './home.js';
import renderAbout from './about.js';
import renderMenu from './menu.js';
import './styles/style.css';

const contentPage = document.getElementById('content')
const homePage = document.getElementById('homeBtn');
const aboutPage = document.getElementById('aboutBtn');
const menuPage = document.getElementById('menuBtn');
let start = false;

if(!start) {
    renderFront();
    start = true;
}

homePage.addEventListener('click', () => {
    clearDis();
    renderFront();
});

aboutPage.addEventListener('click', () => {
    clearDis();
    renderAbout();
})

menuPage.addEventListener('click', () => {
    clearDis();
    renderMenu();
})

function clearDis() {   
    contentPage.innerHTML = '';
}   


