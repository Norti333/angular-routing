var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('node_modules'));



app.listen(8000, function () {
  console.log("local host on 8000")
});

app.all('*', function(req, res) {
  res.sendFile(__dirname + "/public/index.html")
})
