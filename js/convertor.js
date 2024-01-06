let currencyValue = document.querySelector('#currencySelect');
let cryptoValue = document.querySelector('#cryptoSelect');
let displayData = document.querySelector('#data');
let quantity = document.querySelector('#quantity');
const apiKey = 'CG-f2EiKtLUu2hM8Ed7gwgoNEuK'
var money = null;

async function generate(){
    if(quantity.value > 0){
        const jsonData = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoValue.value}&vs_currencies=${currencyValue.value}&${apiKey}`);
        const data = await jsonData.json();
        quantity.style.background = "green";
        //uzimanje vrednosti iz fetchovanog niza
        Object.entries(data).forEach(([key, value]) => {
            console.log(key)
            Object.entries(value).forEach(([keys, value])=>
                money = value
            )
        });
        displayData.innerHTML = `<div>
                                        <p class="displayedNum">${money*quantity.value}</p>
                                 </div>`
        
    }
    else if(quantity.value == ''){
        quantity.style.background = "red";
        displayData.innerHTML = `<div>
                                        <p>Error: Number is empty</p>
                                 </div>`
    }
    else{
        quantity.style.background = "red";
        displayData.innerHTML = `<div>
                                        <p>Error: Number must be greater than 0.</p>
                                 </div>`
    }
    
}
function roundInputValue(input) {
    input.value = Math.round(input.value);
}