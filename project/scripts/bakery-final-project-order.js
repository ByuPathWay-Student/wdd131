const disyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const curdate = new Date();
const year = curdate.getFullYear();

const hamButton = document.querySelector('#menu');
hamButton.setAttribute("aria-label", "Open and close nav");
const navi = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navi.classList.toggle("open");
    hamButton.classList.toggle("open");
});

const selectProduct = document.querySelector('#product');
const formOrder = document.querySelector('#order');

const bakedGoods = [
    {
        name: "Artisan Bread",
        price: 5.00,
        id: "ab5"
    },
    {
        name: "Baguette",
        price: 7.00,
        id: "b7"
    },
    {
        name: "Cake",
        price: 10.00,
        id: "c10"
    },
    {
        name: "Cookie",
        price: 1.00,
        id: "c1"
    },
    {
        name: "Cupcake",
        price: 2.00,
        id: "c2"
    },
    {
        name: "Donut",
        price: 1.50,
        id: "d150"
    },
    {
        name: "Eclair",
        price: 1.50,
        id: "e150"
    },
    {
        name: "Macaron",
        price: 2.50,
        id: "m250"
    },
    {
        name: "Muffin",
        price: 2.00,
        id: "m2"
    },
    {
        name: "Pretzel",
        price: 1.50,
        id: "p150"
    }
];

bakedGoods.forEach(item => {
    let newOption = document.createElement('option');
    newOption.value = item.id;
    newOption.textContent = item.name;
    selectProduct.appendChild(newOption);
});

const chosenAmount = document.querySelector('#amount');

function getItemPrice(itemId) {
    let itemPrice = 0;
    bakedGoods.forEach(item => {
        if (item.id == itemId) {
            itemPrice = item.price;
        }
    });
    return (itemPrice);
};

function setTotalPrice(totalPrice) {
    localStorage.setItem("totalPrice", totalPrice);
}

function getTotalPrice() {
    const totalPrice = localStorage.getItem("totalPrice");
    return totalPrice;
};

function calcTotalPrice(itemId, quantity) {
    if (itemId != null) {
        const itemPrice = getItemPrice(itemId);
        const orderPrice = itemPrice * quantity;
        const currentTotal = getTotalPrice();
        if (!currentTotal) {
            setTotalPrice(orderPrice);
        } else {
            const newTotal = Number(currentTotal) + orderPrice;
            setTotalPrice(newTotal);
        }
    }
};

formOrder.addEventListener("submit", () => {
    let orders = Number(window.localStorage.getItem("ordersSaved")) || 0;
    orders++;
    localStorage.setItem("ordersSaved", orders);
    calcTotalPrice(selectProduct.value, chosenAmount.value);
});

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;