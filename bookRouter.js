const express = require('express');
const bookRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

 
let books = [
    { title: 'The Sun Also Rises', author: 'Ernest Hemingway', _id: uuidv4() },
    { title: 'The Art of War', author: 'Sun Tzu', _id: uuidv4() },
    { title: 'Walden', author: 'David Thoreau', _id: uuidv4() },
    { title: 'Somehow I Manage', author: 'Michael Scott', _id: uuidv4() },
];
 
bookRouter
    .get('/', (req, res) => {
        res.send(books)
})

    .post('/', (req, res) => {
        const newBook = req.body;
        newBook._id = uuidv4();
        books.push(newBook);

    console.log(books)
    res.send(`Successfully added ${newBook.title} to the database`);

})

module.exports = bookRouter;
