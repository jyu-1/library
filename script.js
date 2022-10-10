let myLibrary = [];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return (this.name + ", " + this.author + ", " + this.pages + ", Read: " + this.read);
    }
}

function addBookToLibrary() {
    const newBook = new Book();
    console.log(newBook.info());
}

addBookToLibrary();