let currencyValue = document.querySelector('#currencySelect');
let cryptoValue = document.querySelector('#cryptoSelect');
let displayData = document.querySelector('#data');
let quantity = document.querySelector('#quantity');
const apiKey = 'CG-f2EiKtLUu2hM8Ed7gwgoNEuK'
var money = null;
var coin = null;

async function generate(){
    if(quantity.value > 0){
        quantity.style.background = "white";
        const jsonData = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoValue.value}&vs_currencies=${currencyValue.value}&${apiKey}`);
        const data = await jsonData.json();
        //uzimanje vrednosti iz fetchovanog niza
        Object.entries(data).forEach(([key, value]) => {
            coin = key;
            Object.entries(value).forEach(([keys, value])=>
                money = value.toFixed(2)
            )
        });
        displayData.innerHTML = `<div>
                                        <p class="displayedNum">${quantity.value} ${coin}s are worth ${money*quantity.value} ${currencyValue.value}s</p>
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