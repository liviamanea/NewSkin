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
        name: 'Descoperiți gama NuSkin de ruj lichid de lungă durată, balsamuri și luciu de buze, perfecte pentru tine',
        image: '11.jpg',
        Text: '$',
        price: 114.00
    },
    {
        id: 2,
        name: 'Salutați pletele cu aspect sănătos și mai strălucitoare. Șamponul ageLOC Nutriol pentru scalp și păr, susține părul subțire',
        image: '1.5.jpg',
        Text: '$',
        price: 118.00
    },
    {
        id: 3,
        name: 'Profită la maximum de razele soarelui în timp ce îți protejezi pielea cu această gamă de loțiuni',
        image: '24.jpg',
        Text: '$',
        price: 78.00
    },
    {
        id: 4,
        name: 'Dispunând de un luptător de plăci brevetat și formele brevetate, AP-24 oferă îngrijire avansată a sănătății dintior si gingiilor',
        image: 'pastadinti.png',
        Text: '$',
        price: 139.00
    },

    
    {
        id: 5,
        name: 'Faceți cunoștință cu instrumentul de înfrumusețare care curăță, ofera multiple beneficii de îngrijire a pielii, fara alte suplimente',
        image: '12.jpg',
        Text: '$',
        price: 1219.00
    },
    {
        id: 6,
        name: 'Apa micelară, apă de curățare alimentată cu micele, este cunoscută pentru beneficiile sale de curățare rapide și eficiente',
        image: '13.jpg',
        Text: '$',
        price: 168.00
    }
   
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