const express = require('express');
const app = express();


app.use('/', (req, res, next) => {
    console.log(req.ip);
    next();
});

app.get('/', (req, res) => {
    res.send('Yavsak Cuneyt');
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});