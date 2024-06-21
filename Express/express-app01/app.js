const express = require('express');
const app = express();
const port = 3000;

// app.get('/', function(req, res) {
//     res.send('Hello world');
// });



const wiki = require('./wiki');
app.use('/wiki', wiki);

const myMiddleWare = function(req, res, next) {
    console.log('Middleware');
    next();
};

app.use(myMiddleWare);

app.use('/someroute', myMiddleWare);






app.listen(port, function() {
    console.log(`Example app listening on port ${port}`);
});