const myLibrary = [
    {
        title: "The Silent Patient",
        author: "Alex Michalides",
        pages: 323,
        read: false
    },
    {
        title: "Love Redesigned",
        author: "Lauren Asher",
        pages: 514,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    console.log(myLibrary);
}

function checkTitles(title) {
    const names = document.querySelectorAll(".title");
    let titleExists = false;

    names.forEach((elem) => {
        if (!elem.textContent.includes(title)) {
            titleExists = true;
        };
    } );
    return titleExists;
};

function createCard(title,author,pages,read) {
    const grid = document.querySelector(".books");
    const plusBtn = document.querySelector("#plus");

    const card = document.createElement("div");
    card.className = "card";
    grid.insertBefore(card,plusBtn)
    
    const titleDiv = document.createElement("div");
    titleDiv.className = "title";
    card.appendChild(titleDiv);
    titleDiv.textContent = title;

    const authorDiv = document.createElement("div");
    authorDiv.className = "author";
    card.appendChild(authorDiv);
    authorDiv.textContent = author;

    const pagesDiv = document.createElement("div");
    pagesDiv.className = "pages";
    card.appendChild(pagesDiv);
    pagesDiv.textContent = pages + " pages";

    const readBtn = document.createElement("button");
    readBtn.classList = "read";
    card.appendChild(readBtn);
    readBtn.textContent = "Read";
    readBtn.onclick = function() {
        read = !read;
        readBtn.classList.toggle("unread");
        readBtn.classList.toggle("read");
        readBtn.textContent = read ? "Read" : "Unread";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete";
    card.appendChild(deleteBtn);
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = function() {
        card.parentNode.removeChild(card);
        const bookIndex = myLibrary.findIndex(book => book.title === title);
        if (bookIndex !== -1) {
            myLibrary.splice(bookIndex,1);
        }
    }
}
