const database = require('./your-database-module');

function getAllBooks(callback) {
    (async () => {
        try {

            const books = await database.getAllBooks();
    
            callback(null, books);
        } catch (error) {

            callback(error, null);
        }
    })(); 
}


getAllBooks(async (error, books) => {
    if (error) {
        console.error('Error retrieving books:', error);
    } else {
        console.log('All books retrieved successfully:', books);
   
        await processBooks(books);
    }
});


async function processBooks(books) {
    for (const book of books) {
        console.log(`Processing book: ${book.title}`);
        
        await new Promise(resolve => setTimeout(resolve, 100)); 
    }
}
