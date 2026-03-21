const disyear = document.querySelector('#currentyear');
const lastmod = document.querySelector('#lastModified');

const curdate = new Date();
const year = curdate.getFullYear();

disyear.textContent = year;
lastmod.innerHTML = `Last Modification: ${document.lastModified}`;

const temperature = 7.78;
const windSpeed = 6.4;


if (temperature <= 10 | windSpeed > 4.8) {
    function calculateWindChill(temperature, windSpeed) {
        return 13.12 + (0.6215 * (temperature ** 0.16)) - (11.37 * (windSpeed ** 0.16)) + 0.3965 * (temperature * (windSpeed ** 0.16));
    }

    document.querySelector('#windChill').innerHTML = `${calculateWindChill(temperature, windSpeed).toFixed(1)}°C`;
}
else {
    document.querySelector('#windChill').innerHTML = `N/A`;
}


