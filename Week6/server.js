const express = require('express');
const morgan = require('morgan');

const recycledItemsRouter = require('./routes/recycledItemsRouter');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(morgan('dev'));

app.use('/recycledItems', recycledItemsRouter)


app.listen(PORT, () => {
    console.log(`App stated on port: ${PORT}`)
});



