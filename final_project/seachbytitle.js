const database = require('./your-database-module');

function searchBookByTitle(title) {
    return new Promise((resolve, reject) => {
 
        database.searchBookByTitle(title)
            .then(books => {
                if (books.length > 0) {

                    resolve(books);
                } else {

                    reject(new Error('No books found for the title'));
                }
            })
            .catch(error => {

                reject(error);
            });
    });
}


const titleToSearch = 'Molloy, Malone Dies, The Unnamable, the trilogy'; 
searchBookByTitle(titleToSearch)
    .then(books => {
        console.log('Books found for title:', books);
    })
    .catch(error => {
        console.error('No Books found for title:', error.message);
    });