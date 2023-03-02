const form = document.querySelector('#popUpForm');
const overlay = document.querySelector('.overlay');
const addABookButton = document.querySelector('#popupBtn');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const numberOfPages = document.querySelector('#pages');
const readStatus = document.querySelector('#read-status')
const submitButton = document.querySelector('#submitButton');
const mainContent = document.querySelector('.main-content');
let myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pageLength = pages;
    this.readStatus = readStatus;
}

form.addEventListener ('submit', (e)=> {
    e.preventDefault();
})

submitButton.addEventListener('click', () => {
    myLibrary.push(new Book(title.value, author.value, numberOfPages.value, readStatus.value));
    updateDisplay();
    updateForm();
    form.style.display = 'none';
    overlay.style.display = 'none';
})

addABookButton.addEventListener('click', ()=>{
    overlay.style.display = 'block';
    form.style.display = 'block';
})



function addBookToLibrary () {
    
}

function removeBookFromLibrary () {

}

function updateForm () {
    title.value = '';
    author.value = '';
    numberOfPages.value = '';
    readStatus.value = '';
}

function updateDisplay () {
    myLibrary.forEach((book)=> {
        if (myLibrary.indexOf(book) == (myLibrary.length - 1)){
            let card = document.createElement('div');
            card.setAttribute('class', 'book-card'); 
            mainContent.appendChild(card);
            let bookTitle = document.createElement('div');
            let bookAuthor = document.createElement('div');
            let bookNumberofPages = document.createElement('div');
            let bookReadStatus = document.createElement('button');
            let removeButton = document.createElement('button');
            bookTitle.setAttribute('class', 'book-title');
            bookAuthor.setAttribute('class', 'book-author');
            bookNumberofPages.setAttribute('class', 'number-of-pages');
            bookReadStatus.setAttribute('class', 'read-status');
            removeButton.setAttribute('class', 'remove');
            bookTitle.innerText = book.title;
            bookAuthor.innerText = book.author;
            bookNumberofPages.innerText = (book.pageLength);
            bookReadStatus.innerText = book.readStatus;
            removeButton.innerText = 'remove';
            card.appendChild(bookTitle);
            card.appendChild(bookAuthor);
            card.appendChild(bookNumberofPages);
            card.appendChild(bookReadStatus);
            card.appendChild(removeButton);
        }
    })
}