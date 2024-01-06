function redirectToDynamicPage(num){
    const dynamicPageUrl = `dynamic_page.html?id=${num}`;
  
    // Redirect to the dynamically created page
    window.location.href = dynamicPageUrl;
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