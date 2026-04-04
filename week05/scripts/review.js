const disyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const showReviews = document.querySelector(".reviews");

let numReviews = Number(window.localStorage.getItem("numReviewsSaved")) || 0;

if (numReviews !== 0) {
    showReviews.textContent = numReviews;
} else {
    showReviews.textContent = `There are no reviews yet.`;
}

localStorage.setItem("numReviewsSaved", numReviews);

const curdate = new Date();
const year = curdate.getFullYear();

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;