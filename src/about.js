import picVietnam from './assets/vietnampic.jpg';
import bicPic from './assets/viet.jpg';

const content = document.getElementById('content');


function renderAbout() {
    const navDiv = document.createElement('div');
    navDiv.classList.add('navbar');

    const outDiv = document.createElement('div');
    outDiv.classList.add('outDiv');

    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    const header = document.createElement('h2');
    header.textContent = 'About Us';

    const underline = document.createElement('hr')

    const firstpara = document.createElement('p');
    firstpara.classList.add('para');
    firstpara.textContent = 'At "Pho Da Bih," we are a family-owned Vietnamese restaurant with a rich heritage and a deep-rooted passion for sharing authentic Vietnamese cuisine. Our story began in Vietnam, where our family honed their culinary skills, learning traditional recipes passed down through generations. We immigrated to the United States with a dream: to bring the vibrant flavors and warmth of Vietnamese culture to our new home'

    const secondpara = document.createElement('p');
    secondpara.classList.add('para');
    secondpara.textContent = 'As we settled in the States, we realized that food has the unique power to connect people. We wanted to create a place where our customers could experience the rich diversity of Vietnamese cuisine, from the comforting bowls of pho to the fragrant dishes of lemongrass chicken and fresh spring rolls. At "Pho Da Bih," we take pride in using fresh ingredients and preparing each dish with care and love, just as our ancestors did.'
    
    const thirdpara = document.createElement('p');
    thirdpara.classList.add('para')
    thirdpara.textContent = 'Our restaurant is more than just a place to eat; it\'s a space where family and friends can gather, share stories, and create memories. We welcome you to our table, where the aroma of Vietnamese herbs and spices fills the air, and the smiles of our family greet you at the door. Join us on this journey as we continue to celebrate the flavors and traditions of Vietnam while embracing the spirit of our new home.'
    
    const imaDiv = document.createElement('div');
    imaDiv.classList.add('imaDiv');
    const firstimg = document.createElement('img');
    firstimg.setAttribute("id", "vietpic");
    firstimg.src = picVietnam;
    firstimg.alt = "Picture of Vietnam"
    const secondimg = document.createElement('img');
    secondimg.setAttribute("id", "bikepic");
    secondimg.src = bicPic;
    secondimg.alt = "Bicycle in street of Vietnam"
    imaDiv.appendChild(firstimg);
    imaDiv.appendChild(secondimg);

    aboutDiv.appendChild(header);
    aboutDiv.appendChild(underline);
    aboutDiv.appendChild(firstpara);
    aboutDiv.appendChild(secondpara);
    aboutDiv.appendChild(thirdpara);
    aboutDiv.appendChild(imaDiv);
    content.appendChild(navDiv);
    outDiv.appendChild(aboutDiv);
    content.appendChild(outDiv);
    // content.appendChild(aboutDiv);
}

export default renderAbout;