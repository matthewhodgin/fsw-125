const express = require('express');
const tvShowRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

 
let tvShows = [
    { title: 'Animal Kingdom', channel: 'TNT', _id: uuidv4() },
    { title: 'Barry', channel: 'HBO', _id: uuidv4() },
    { title: 'The Boys', channel: 'Amazon Prime', _id: uuidv4() },
    { title: 'The Orville', channel: 'Hulu', _id: uuidv4() },
];
 
tvShowRouter
    .get('/', (req, res) => {
        es.send(tvShows)
})
 
    .post('/', (req, res) =>{
        const tvShow = req.body;
        tvShow._id = uuidv4();
        tvShows.push(tvShow);

    console.log(tvShows)
    res.send(`Successfully added ${tvShow.title} to the database`);

})

module.exports = tvShowRouter;
