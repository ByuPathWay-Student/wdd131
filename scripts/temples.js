const hamButton = document.querySelector('#menu');
const navi = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navi.classList.toggle("open");
    hamButton.classList.toggle("open");
});


const disyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const curdate = new Date();
const year = curdate.getFullYear();

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;