const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.get('/', (req, res, next) => {
    res.send('WELCOME TO NODE TEST!');
});

app.listen(port, () => {
    console.log('test');
});