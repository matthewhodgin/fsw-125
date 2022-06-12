const express = require('express');
const app = express();

const PORT = 3000;

let users = [
    { name: 'jake', location: 'phoenix' },
    { name: 'john', location: 'dallas' },
    { name: 'jeremy', location: 'miami' },
    { name: 'jim', location: 'boston' },
    { name: 'jan', location: 'san francisco' },
];


app.get('/users', (req, res)  => {
    res.send(users)

});

app.listen (PORT, () => {
    console.log(`App started on port: ${PORT}`)
})