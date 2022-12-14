let myLibrary = [
    { name: "Harry Potter and the Philosopher's Stone", author: "J. K. Rowling", pages: "223", read: true },
    { name: "Harry Potter and the Chamber of Secrets", author: "J. K. Rowling", pages: "251", read: false },
    { name: "Harry Potter and the Prisoner of Azkaban", author: "J. K. Rowling", pages: "317", read: true },];

const modal = document.querySelector("#myModal");
const btn = document.querySelector("#add-btn");
const bookTable = document.querySelector(".book-table");

const form = document.getElementById("add-form");

function handleForm(event) {
    event.preventDefault();
    addBookToLibrary();
    modal.style.display = "none";
}

form.addEventListener('submit', handleForm);

function showBook() {
    bookTable.textContent = "";
    myLibrary.forEach((library, index) => {
        const row = document.createElement("tr");
        const tdName = document.createElement("td");
        const tdAuthor = document.createElement("td");
        const tdPage = document.createElement("td");
        const tdStatus = document.createElement("td");
        const tdDelete = document.createElement("td");
        const btnStatus = document.createElement("button");
        const btnDelete = document.createElement("button");

        tdName.innerText = library.name;
        tdAuthor.innerText = library.author;
        tdPage.innerText = library.pages;

        btnStatus.className = "status";
        btnStatus.innerText = "Read";
        btnDelete.className = "delete";
        btnDelete.innerText = "Delete";
        tdStatus.appendChild(btnStatus);
        tdDelete.appendChild(btnDelete);

        if (library.read === true) {
            btnStatus.innerText = "Read";
        }
        else {
            btnStatus.innerText = "Not Read";
        }

        btnStatus.onclick = function () {
            if (library.read === true) {
                library.read = false;
                btnStatus.innerText = "Not Read";
            }
            else {
                library.read = true;
                btnStatus.innerText = "Read";
            }
        }

        btnDelete.onclick = function () {
            myLibrary.splice(index, 1);
            showBook();
        }

        row.appendChild(tdName);
        row.appendChild(tdAuthor);
        row.appendChild(tdPage);
        row.appendChild(tdStatus);
        row.appendChild(tdDelete);

        bookTable.appendChild(row);
    })
}

showBook();

btn.onclick = function () {
    modal.style.display = "block";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    const namee = document.querySelector("#book-name");
    const authorr = document.querySelector("#author-name");
    const pagee = document.querySelector("#pages");
    const readd = document.querySelector("#read-checkbox");

    const newBook = new Book(namee.value, authorr.value, pagee.value, readd.checked);

    myLibrary.push(newBook);

    showBook();

    namee.value = "";
    authorr.value = "";
    pagee.value = "";
    readd.checked = false;
}