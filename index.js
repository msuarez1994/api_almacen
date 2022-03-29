const express = require('express');
const app = new express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hola desde express, estoy en el PORT:' + port);
})

app.listen(port, () => {
    console.log('running...' + port);
});