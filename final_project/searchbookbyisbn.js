const database = require('./your-database-module');


function searchBookByISBN(isbn) {
    return database.searchBookByISBN(isbn) 
        .then(book => {
            if (book) {
                return book; 
            } else {
                throw new Error('Book not found');
            }
        })
        .catch(error => {
            throw new Error(`Failed to search for book: ${error.message}`);
        });
}

// Example of using the searchBookByISBN function
const isbnToSearch = '10'; 

searchBookByISBN(isbnToSearch)
    .then(book => {
        console.log('Book found:', book);
    })
    .catch(error => {
        console.error('Error searching for book:', error.message);
    });