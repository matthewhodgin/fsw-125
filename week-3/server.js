const express = require('express');
const app = express();

const recycledItemsRouter = require('./recycledItemsRouter');

const PORT = 3000;

app.use(express.json())

app.use('/recycledItems', recycledItemsRouter)


app.listen(PORT, () => {
    console.log(`App stated on port: ${PORT}`)
});


