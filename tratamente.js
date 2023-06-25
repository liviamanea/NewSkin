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
        name: 'Nu Skin Hair Care începe să corecteze și să prevină daunele provocate de agresoride mediu',
        image: 'haircare.png',
        Text: '$',
        price: 139.00
    },
    {
        id: 2,
        name: 'Facute pentru a satisface cerințele vieții de zi cu zi, produsele Pharmanex Solutions oferă nutrienți specifici-',
        image: 'pharmanex.png',
        Text: '$',
        price: 173.00
    },
    {
        id: 3,
        name: 'Produsele de îngrijire corporală Nu Skin conțin ingrediente concepute pentru a hrăni, condiționa și calmează',
        image: '8.jpg',
        Text: '$',
        price: 84.00
    },
   
   
    {
        id: 4,
        name: 'Dacă sunteți în căutarea unei soluții rapide pentru mâinile uscate, aceasta este alegerea perfecta pentru produsul tau preferat',
        image: '17.jpg',
        Text: '$',
        price: 76.00
    },
    {
        id:5,
        name: 'O mască cu nămol etnobotanic, care curăță pielea, care îndepărtează ușor, dar eficient impuritățile, exfoliază și catifelează pielea',
        image: '18.jpg',
        Text: '$',
        price: 157.00
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