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

const showOrders = document.querySelector('#numOrder')
const showTotal = document.querySelector('#total')

let orders = Number(window.localStorage.getItem("ordersSaved")) || 0;

if (orders !== 0) {
    showOrders.textContent = `You have placed ${orders} order(s).`;
} else {
    showOrders.textContent = `There are no current orders.`;
}

localStorage.setItem("ordersSaved", orders);

let totalPrice = localStorage.getItem("totalPrice");

if (!totalPrice) {
    showTotal.textContent = `There are no current orders to get a total from.`;
} else {
    showTotal.textContent = `The total of your order(s) is: $${totalPrice}`;
}

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;