const express = require('express');
const app = express();

const bookRouter = require('./routes/bookRouter');
const tvShowRouter = require('./routes/tvShowRouter');

const PORT = 3000;


app.use(express.json())

app.use('/books', bookRouter)
app.use('/tv-shows', tvShowRouter)


app.listen(PORT, () => {
    console.log('App stated on port: ${PORT}')
});




// const { v4: uuidv4 } = require('uuid');

// // Appication Level Middleware
// app.use(express.json()) //for parsing app/json


// routes

// // POST to add a new resource to our collection
// app.post('/tv-shows', (req, res) =>{
//     const tvShow = req.body;
//     tvShow._id = uuidv4();
//     tvShows.push(tvShow);

//     console.log(tvShows)

//     res.send('post succesful')
//     res.send(`Successfully added ${tvShow.title} to the database`);
// });

// app.get('/tv-shows', (req, res) => {
//     res.send(tvShows)
// });



// //GET all route
// app.get('/books', (req, res) => {
//     res.send(books)
// });


// // POST to add a new resource to our collection
// app.post('/books', (req, res) =>{
//     const newBook = req.body;
//     newBook._id = uuidv4();
//     books.push(newBook);

//     console.log(books)

//     res.send('post succesful')
//     res.send(`Successfully added ${newBook.title} to the database`);
// });
