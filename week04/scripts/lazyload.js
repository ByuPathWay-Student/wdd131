const disyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const curdate = new Date();
const year = curdate.getFullYear();

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;