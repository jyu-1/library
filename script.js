const modal = document.querySelector("#myModal");
const btn = document.querySelector("#add-btn");

btn.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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

