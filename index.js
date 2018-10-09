function fetchBooks() {
  //write fetch request to the Game of Thrones API
   fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json) + console.log(json))
    
}

function renderBooks(json) {
  let counter = 0;
  const main = document.querySelector('main')
  json.forEach(book => {

// start new expression    
    if(counter === 4){
    const fifthBook = document.createElement('h1');
    fifthBook.innerHTML = `<h2> This ${book.name} is the 5th book</h2>`
    main.appendChild(fifthBook)
    }
// end of new expresssion     

    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
    counter++
  })
  
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})