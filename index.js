const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Gerenciador Financeiro");
});

app.get("/sobre-empresa", function(req,res){
    res.send("Página sobre empresa");
});

app.get("/pagina-blog", function(req,res){
    res.send("Página do Blog");
});

app.get("/contato", function(req,res){
    res.send("Página de contato");
});


//localhost:80139
app.listen(8039);