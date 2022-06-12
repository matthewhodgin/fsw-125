const express = require('express');
const recycledItemsRouter = express.Router();
const { v4: uuidv4 } = require('uuid');

 
let recycledItems = [
    { name: 'Cardboard', description: 'Box Cardboard', recycleable: 'Yes', quantiy: '1 million', unitPrice: '10 cents each', _id: uuidv4() },
    { name: 'Alimunum', description: 'Cans', recycleable: 'Yes', quantiy: '10 million', unitPrice: '5 cents each', _id: uuidv4() },
    { name: 'Mixed Paper', description: 'Various Paper', recycleable: 'No', quantiy: '100 million', unitPrice: '0 cents each', _id: uuidv4() },
    { name: 'Glass', description: 'Glass Bottles / Containers', recycleable: 'Yes', quantiy: '50 million', unitPrice: '10 cents each', _id: uuidv4() },
];

recycledItemsRouter
    .get('/', (req, res) => {
        res.send(recycledItems)
})

    .post('/', (req, res) => {
        const newrecycledItem = req.body;
        newrecycledItem._id = uuidv4();
        recycledItems.push(newrecycledItem);

    console.log(recycledItems)
    res.send(`Successfully added ${newrecycledItem.title} to the database`);

})

    .delete('/:')

    .put()

module.exports = recycledItemsRouter;