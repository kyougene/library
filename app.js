const hobbit = {
    title: 'hobbit', 
    author: 'someone',
    pages: 300,
    read: true
}

const potter = {
    title: 'harrypotter',
    author: 'someone',
    pages: 300,
    read: true
}


let myLibrary = [hobbit, potter];














function Library (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBook (input) {
    myLibrary.push(new Library (input)); 
}
