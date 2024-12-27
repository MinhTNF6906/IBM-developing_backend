const database = require('./your-database-module');

function searchBookByAuthor(author) {
    return new Promise((resolve, reject) => {
 
        database.searchBookByAuthor(author)
            .then(books => {
                if (books.length > 0) {

                    resolve(books);
                } else {

                    reject(new Error('No books found for the author'));
                }
            })
            .catch(error => {

                reject(error);
            });
    });
}


const authorToSearch = 'Samuel Beckett'; 
searchBookByAuthor(authorToSearch)
    .then(books => {
        console.log('Books found for author:', books);
    })
    .catch(error => {
        console.error('No Books found for author:', error.message);
    });