const express = require('express');
const chessPlayerRouter = express.Router();
const { v4: uuidv4 } = require('uuid');


let chessPlayer = [
    {
        name: 'Magnus Carlson', 
        country: 'Norway', 
        worldChampion: 'Yes', 
        rating: '2864', 
        rank: '1', 
        _id: uuidv4() 
    },
    {
        name: 'Viswanathan Anand', 
        country: 'India', 
        worldChampion: 'Yes', 
        rating: '2756', 
        rank: '13', 
        _id: uuidv4()
    },
    {
        name: 'Ding Liren', 
        country: 'China', 
        worldChampion: 'No', 
        rating: '2804', 
        rank: '2', 
        _id: uuidv4()
    },
    {
        name: 'Farbiano Caruana', 
        country: 'USA', 
        worldChampion: 'No', 
        rating: '2781', 
        rank: '5', 
        _id: uuidv4()
    }
];

chessPlayerRouter
    .get('/', (req, res) => {
        res.status(200).send(chessPlayers);
})  // GET all

    .get('/:chessPlayerId', (req, res) => {
        const chessPlayerId = req.params.chessPlayerId;
        const singularchessPlayer = chessPlayers.find(chessPlayer => chessPlayer._id === chessPlayerId);

        res.send(singularchessPlayer);
})  // GET one

    .post('/', (req, res) => {
        const newchessPlayer = req.body;
        newchessPlayer._id = uuidv4();
        chessPlayers.push(newchessPlayer);

        console.log(chessPlayers)
        res.status(201).send(`Successfully added ${newchessPlayer.title} to the database`);
})

    .delete('/:chessPlayerId', (req, res) => {
        const chessPlayerId = req.params.chessPlayerId;
        const chessPlayerIndex = chessPlayers.findIndex(chessPlayer => chessPlayer._id === chessPlayerId);
        chessPlayers.splice(chessPlayerIndex, 1);

        res.send('Resource successfully deleted!')

})  // DELETE one

    .put('/:chessPlayerId', (req, res) => {
        const chessPlayerId = req.params.chessPlayerId;
        const chessPlayerIndex = chessPlayers.findIndex(chessPlayer => chessPlayer._id === chessPlayerId);
        Object.assign(chessPlayers[chessPlayerIndex], req.body);

        res.send('Resource successfully updated!');
}) 

module.exports = chessPlayerRouter;