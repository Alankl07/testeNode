const express = require('express');

const app = express();

app.get("/", function(req, res){
  res.send("Hello na aws");
})

app.listen( process.env.PORT ||3000)

module.exports = app