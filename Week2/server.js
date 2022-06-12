const express = require('express');
const app = express();

const PORT = 3000;

app.get('/boats', (req, res)  => {
    res.send({
        class: 'luxury',
        location: 'newport beach, ca'
    })

})
z

app.get('/planes', (req, res)  => {
    res.send({
        wingspan: '20 ft',
        weight: '<12,500 lbs'
    })

})


app.get('/motorcycle', (req, res)  => {
    res.send({
        condition: 'new',
        style: 'standard'
    })

})


app.listen (PORT, () => {
    console.log(`App started on port: ${PORT}`)
})