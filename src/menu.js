import springRolls from './assets/springrolls.jpg';
import bowlPho from './assets/bowlpho.jpg';
import che from './assets/che.jpg';

const content = document.getElementById('content');

function renderMenu() {
    const outsideDiv = document.createElement('div');
    outsideDiv.classList.add('menudiv');

    const item1 = document.createElement('div');
    item1.classList.add('flexmenu');

    const img1 = document.createElement('img');
    img1.src = springRolls;
    img1.setAttribute("id", "springrolls");

    const firstdiv = document.createElement('div');
    firstdiv.classList.add('gridmenu');
    
    const header1 = document.createElement('h2');
    header1.textContent = 'Vietnamese Spring Rolls (Gỏi Cuốn)'

    const para1 = document.createElement('p');
    para1.classList.add('menupara');
    para1.textContent = 'Fresh and vibrant, our Vietnamese spring rolls are a delightful combination of rice paper filled with crisp vegetables, tender shrimp, vermicelli noodles, and aromatic herbs. Served with our special hoisin-peanut dipping sauce, these rolls are light, refreshing, and perfect for a healthy appetizer or snack. Enjoy the delicate balance of flavors and textures in each bite.'

    firstdiv.appendChild(header1);
    firstdiv.appendChild(para1);
    item1.appendChild(img1);
    item1.appendChild(firstdiv);

    const item2 = document.createElement('div');
    item2.classList.add('flexmenu');

    const seconddiv = document.createElement('div');
    seconddiv.classList.add('gridmenu');

    const header2 = document.createElement('h2');
    header2.textContent = 'Vietnamese Pho (Phở)';

    const para2 = document.createElement('p');
    para2.classList.add('menupara');
    para2.textContent = 'Experience the rich and aromatic flavors of Vietnamese pho, a classic noodle soup that warms the soul. Our pho is crafted with a fragrant beef or chicken broth, slow-cooked with a blend of traditional spices and herbs. Served with tender rice noodles, thinly sliced meats, and a variety of fresh garnishes like bean sprouts, basil, lime, and chili, each bowl is a customizable journey into the heart of Vietnamese cuisine. Enjoy it as a comforting meal that embodies the essence of Vietnamese hospitality.'

    const img2 = document.createElement('img');
    img2.src = bowlPho;
    img2.setAttribute("id", "bowlpho");

    seconddiv.appendChild(header2);
    seconddiv.appendChild(para2);
    item2.appendChild(seconddiv);
    item2.appendChild(img2);

    const item3 = document.createElement('div');
    item3.classList.add('flexmenu');

    const thirddiv = document.createElement('div');
    thirddiv.classList.add('gridmenu');

    const img3 = document.createElement('img');
    img3.src = che;
    img3.setAttribute("id", "che")

    const header3 = document.createElement('h2');
    header3.textContent = 'Vietnamese Chè (Chè)'

    const para3 = document.createElement('p');
    para3.classList.add('menupara');
    para3.textContent = 'Indulge in the delightful world of Vietnamese chè, a traditional dessert that\'s as diverse as it is delicious. Our chè menu offers a variety of sweet treats, featuring a mix of ingredients like coconut milk, mung beans, sticky rice, jellies, and tropical fruits. Whether you prefer it hot or cold, each bowl is a unique combination of textures and flavors that will satisfy your sweet tooth. Discover the refreshing and comforting delights of Vietnamese chè—perfect for rounding off your meal with a touch of sweetness.'

    thirddiv.appendChild(header3);
    thirddiv.appendChild(para3);
    item3.appendChild(img3);
    item3.appendChild(thirddiv);

    outsideDiv.appendChild(item1);
    outsideDiv.appendChild(item2);
    outsideDiv.appendChild(item3);
    content.appendChild(outsideDiv);

    
}

export default renderMenu;