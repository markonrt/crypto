function redirectToDynamicPage(num){
    const dynamicPageUrl = `dynamic_page.html?id=${num}`;
  
    // Redirect to the dynamically created page
    window.location.href = dynamicPageUrl;
  }
 var categoryArray = [];  
  const grid = document.querySelector('.grid')
    fetch("https://api.npoint.io/97488dd289e1f449c689")
      .then(res => res.json())
      .then(posts => {

        grid.innerHTML = ''
        posts.forEach((post,num) => {
          grid.innerHTML += `
            <div class="card" data-category="${post.category}">
              <img class="header-img" src=${post.img}/>
              <div class="categoryTitle" category>${post.category}</div>
              <div class="title" data-heading>${post.heading}</div>
              <div data-resume>${post.resume}</div>
              <div id="dynamicLink" onclick="redirectToDynamicPage(${num})">Read More!</div>
            </div>
          `;  
  })
})

function categorySort(button){
  
  let sortCattegory = button.getAttribute('data-category')
  let newsCattegory = document.querySelectorAll('.card')

  newsCattegory.forEach((news)=>{
    news.style.display = 'none'
  })

  if(sortCattegory === 'all'){
    newsCattegory.forEach((news)=>{
      news.style.display = 'flex'
    })
  }

  newsCattegory.forEach((news)=>{
    if(news.getAttribute('data-category').includes(sortCattegory)){
      news.style.display = 'flex';
    }
  })
}


