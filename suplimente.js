let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
const exchange = document.querySelector('.exchange');



let products = [
  
    {
        id: 1,
        name: 'Facute pentru a satisface cerințele vieții de zi cu zi, produsele Pharmanex Solutions oferă nutrienți specifici-',
        image: 'pharmanex.png',
        Text: '$',
        price: 173.00
    },
    {
        id: 2,
        name: 'Vă prezentăm trusa TR90 de 30 de zile, un program de bunăstare jucăuș, conceput pentru a vă face mai sănătos',
        image: 'lemon.png',
        Text: '$',
        price: 55.00
    },
    {
        id: 3,
        name: 'Ajută la susținerea întineririi celulare.Încetinește efectele comune ale îmbătrânirii prin protecția ADN-ului',
        image: 'omega.jpg',
        Text: '$',
        price: 240.00
    },
    {
        id: 4,
        name: 'Conceput pentru a conține mai mult decât ceai, TRthriv Focus Tea este o băutură care vă ajută să vă începeți ziua cu bine',
        image: 'tea.png',
        Text: '$',
        price: 76.00
    },
    
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <div class="title">${value.Text}</div>
            <button onclick="addToCard(${key})">Cumpara</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.price.toLocaleString()}</div>
             <div>${value.Text}</div>
            
             
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            <div>"produsul este in cos!"</div>`;
            
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
        
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}