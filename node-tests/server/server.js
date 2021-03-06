const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo Appv1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send(
        [{
            name: 'Lasse',
            age: 25
        },
        {
            name: 'Pekka',
            age: 35
        }]
    );
});

app.listen(3000);

module.exports = {
    app
}