var app = require('express')();

app.get('/', (req, res) => { res.send('hello word')} );

app.listen(3000);