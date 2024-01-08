const newRow = document.querySelector('#tableBody')
        async function ftc(){
            try{
                const key = 'CG-4mvFgJGYBf1jK2VfFpcWjx4m'
                const jsonData = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=50&page=1&sparkline=false&locale=en&precision=2&${key}`);
                const data = await jsonData.json();
                console.log(data)
                data.forEach((element,elNum) => {
                  newRow.innerHTML += `
                    <td>${elNum}</td>
                    <td>${element.name}</td>
                    <td>$${element.current_price.toFixed(2)}</td>
                    <td>${element.price_change_percentage_24h}%</td>
                    <td>$${element.market_cap}</td>`;
                })
            }
            catch(error){
                console.log(error)
            }
        }
ftc();