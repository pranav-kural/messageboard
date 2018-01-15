var express = require('express');
var app = express();

var messages = [{text:'some text', owner:'Tia'}, {text:'other message', owner:'Jane'}];

app.get('/', (req, res) => {
    res.json(messages);
});

app.listen(1234);