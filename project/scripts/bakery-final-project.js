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

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;