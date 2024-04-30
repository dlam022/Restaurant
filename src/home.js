import locationPic from './assets/placeholder.png';

const contentDiv = document.getElementById('content');

function renderFront() {
    const headdiv = document.createElement('div');
    headdiv.classList.add('headerDiv');
    const header = document.createElement('h1');
    header.textContent = 'Pho Da Bih'

    const addressDiv = document.createElement('div');
    addressDiv.classList.add('addressDiv');
    addressDiv.style.display = 'flex';
    const address = document.createElement('p');
    const locationpic = document.createElement('img');
    locationpic.src = locationPic;
    locationpic.setAttribute("id", "loca");
    address.innerHTML = '123 5th Avenue, San Disco, New York'
    address.classList.add('address');
    addressDiv.appendChild(locationpic);
    addressDiv.appendChild(address);

    const reserve = document.createElement('button');
    reserve.textContent = 'Book a Table'
    reserve.classList.add('reserveBtn')
    

    headdiv.appendChild(header);
    headdiv.appendChild(addressDiv);
    headdiv.appendChild(reserve);
    contentDiv.appendChild(headdiv);
}

export default renderFront;

