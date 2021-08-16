const http = require("http");
const express = require("express");
const app = express();

const porta= 80;

app.get("/", function(req, res) {
    res.send("<h1>Servidor rodando com ExpressJS</h1>");
});

app.get("/tiago", (request, response) => {
    response.send("<p>olá<p>");
});

http.createServer(app).listen(porta, () => console.log("Servidor rodando local na porta " + porta));