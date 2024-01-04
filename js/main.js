let dropDownMenu = document.querySelector('.dropDownMenuNot')
let rotatingMenu = document.querySelector('.hamburger-menu')
let toggleMenu = () => {
    rotatingMenu.classList.toggle("rotate")
    dropDownMenu.classList.toggle("dropDownMenu") 
}

const grid = document.querySelector('.grid')
  const cardTemplate = document.getElementById('card-template')
  for (let i = 0; i < 20; i++) {
    grid.append(cardTemplate.content.cloneNode(true))
  }

  fetch("https://api.npoint.io/97488dd289e1f449c689")
    .then(res => res.json())
    .then(posts => {
      grid.innerHTML = ''
      posts.forEach((post,num) => {
        const div = cardTemplate.content.cloneNode(true)
        div.querySelector('.header-img').setAttribute("src", `${post.img}`);
        div.querySelector('[data-heading]').textContent = post.heading
        div.querySelector('[data-resume]').textContent = post.resume
        div.querySelector('[button]').innerHTML = `<div id="dynamicLink" onclick="redirectToDynamicPage(${num})">Read More!</div>`
        grid.append(div)
      })
})
function redirectToDynamicPage(num){
    console.log(num)
}























  
/*
async function fetchNewsData() {
    
      const response = await fetch('https://api.npoint.io/97488dd289e1f449c689');
      const data = await response.json();

      // Use the fetched data here
      console.log(data);
    
  }

  // Call the function to fetch data
  fetchNewsData();*/