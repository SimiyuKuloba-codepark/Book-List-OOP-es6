class Book{
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{

  // ADD-BOOK-TO-LIST
  // ADD-BOOK-TO-LIST
  addBookToList(book){
    // get-body-element
    const list = document.getElementById('book-list');

    // create-tr-element
    const row = document.createElement('tr');

    // insert-cols
    row.innerHTML = `
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.isbn}</td>
      <td><a href="#" class="delete">X</a></td>
    `;

    // append-row-to-list-parent
    list.appendChild(row);
  }


  // SHOW-ALERT
  // SHOW-ALERT
  showAlert(message, className){
    // create-a-div
    const div = document.createElement('div');

    // add-className
    div.className = `alert ${className}`;

    // add-text
    div.appendChild(document.createTextNode(message));

    // get-parent
    const container = document.querySelector('#input');

    const form = document.querySelector('#form-area');

    // insert-alert
    container.insertBefore(div, form);

    // timeout-after-3-seconds
    setTimeout(function(){
      document.querySelector('.alert').remove();
    }, 3000);
  }


  // DELETE-BOOK
  // DELETE-BOOK
  deleteBook(target){
    if(target.className === 'delete'){
      target.parentElement.parentElement.remove();
    }
  }

  
  // CLEAR-FIELDS
  // CLEAR-FIELDS
  clearFields(){
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}


// EVENT-LISTENERS-FOR-ADD-BOOK
// EVENT-LISTENERS-FOR-ADD-BOOK
document.getElementById('form').addEventListener('submit', function(e){

  // get-form-values
  const title = document.getElementById('title').value;

  const author = document.getElementById('author').value;

  const isbn = document.getElementById('isbn').value;

  // instantiate-book
  const book = new Book(title, author, isbn);

  // instatiate-UI
  const ui = new UI();

  // validation
  if(title === '' || author === '' || isbn ==='' ){
    // show-error-alert
    ui.showAlert('Please fill all fields', 'error');
  }else{
    // add-book-to-lis
    ui.addBookToList(book);

    // show-success-alert
    ui.showAlert('Book Added', 'success');

    // clear-fields
    ui.clearFields();
  }

  e.preventDefault();
})


// EVENT-LISTENERS-FOR-DELETE-BOOK
// EVENT-LISTENERS-FOR-DELETE-BOOK
document.querySelector('#book-list').addEventListener('click', function(e){

  // Instantiate UI
  const ux = new UI();

  // Delete book
  ux.deleteBook(e.target);
  console.log(ux);

  // Show message
  ux.showAlert('Book Removed!', 'success');

  e.preventDefault();
});
