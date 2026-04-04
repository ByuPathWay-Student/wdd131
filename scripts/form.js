const disyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');
const form = document.querySelector('#form1');
const select = document.querySelector('#pName');

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

products.forEach(product => {
    let newSelect = document.createElement('option');
    newSelect.value = product.id;
    newSelect.textContent = product.name;
    select.appendChild(newSelect);

});

form.addEventListener("submit", () => {
    let numReviews = Number(window.localStorage.getItem("numReviewsSaved")) || 0;
    numReviews++;
    localStorage.setItem("numReviewsSaved", numReviews);
});

const curdate = new Date();
const year = curdate.getFullYear();

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;