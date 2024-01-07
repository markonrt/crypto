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

const showData = document.querySelector('#dynamic-container')
        function getQueryParams() {
            let value;
            const queryString = window.location.search.substring(1);
            value = queryString.split('=')[1];
            return value;
        }

        async function displayForwardedData() {
            const queryParams = getQueryParams();
            
            // Fetch the JSON data based on the forwarded ID
            const jsonData = await fetch(`https://api.npoint.io/97488dd289e1f449c689/${queryParams}`);
            const data = await jsonData.json();
            
            showData.innerHTML += `
                <div class="imgBg">
                    <img src="${data.img}" class="dynamic_img">
                </div>
                
                <h2 class="dynamic_heading width">${data.heading}</h2>
            `;
            
            data.paragraphs.map(paragraph => {
                showData.innerHTML += `<p class="dynamic_paragraph width">${paragraph}</p>`
            })
            
        }
displayForwardedData();