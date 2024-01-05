let dropDownMenu = document.querySelector('.dropDownMenuNot')
let rotatingMenu = document.querySelector('.hamburger-menu')
let toggleMenu = () => {
    rotatingMenu.classList.toggle("rotate")
    dropDownMenu.classList.toggle("dropDownMenu") 
}

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
                <img src="${data.img}" class="dynamic_img">
                <h2 class="dynamic_heading">${data.heading}</h2>
            `;
            
            data.paragraphs.map(paragraph => {
                showData.innerHTML += `<p class="dynamic_paragraph">${paragraph}</p>`
            })
            
        }
displayForwardedData();