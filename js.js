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

function displayBook() {
    myLibrary.forEach((book) => function() {
        createCard(book.title, book.author, book.pages, book.read);
    });
}

