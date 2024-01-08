let cryptoNavBtn = document.querySelector('.crypto')
let openHam = document.querySelector('#openHam');
let closeHam = document.querySelector('#closeHam');
let nav_middle = document.querySelector('.nav-middle');

const hamburgerEvent = (navigation, close, open) => {
    nav_middle.style.display = navigation;
    closeHam.style.display = close;
    openHam.style.display = open;
};

openHam.addEventListener('click', () => hamburgerEvent("flex", "block", "none"));
closeHam.addEventListener('click', () => hamburgerEvent("none", "none", "block"));



const showData = document.querySelector('#coin-container')
        function getQueryParams() {
            let value;
            const queryString = window.location.search.substring(1);
            value = queryString.split('=')[1];
            console.log(value)
            return value;
        }

        async function displayForwardedData() {
            const queryParams = getQueryParams();
            
            // Fetch the JSON data based on the forwarded ID
            const jsonData = await fetch(`https://api.coingecko.com/api/v3/coins/${queryParams}?localization=en`);
            const data = await jsonData.json();
            console.log(data)
        }
displayForwardedData();