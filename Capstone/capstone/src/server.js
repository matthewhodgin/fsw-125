const express = require('express');
const morgan = require('morgan');

const recycledItemsRouter = require('./routes/recycledItemsRouter');

const app = express();
const PORT = 3000;

app.use(express.json())
app.use(morgan('dev'));

app.use('/recycledItems', recycledItemsRouter)

//global error-handler 
app.use((err, req, res, next) => {
    if (res.headersSent) {
        return next(err)
      }
      res.status(500)
      res.render('error', { error: err })
    }
)

app.listen(PORT, () => {
    console.log(`App stated on port: ${PORT}`)
})
