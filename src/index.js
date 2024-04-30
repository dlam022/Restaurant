import renderFront from './home.js'
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
    contentPage.innerHTML = '';
    renderFront();
});

aboutPage.addEventListener('click', () => {
    console.log('click')
    clearDis();
})

function clearDis() {   
    contentPage.innerHTML = '';
}   


