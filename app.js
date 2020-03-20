const express = require('express');
const rotas = require('./src/routes');
const app = express();

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(express.static(__dirname + '/public'))
app.use(rotas)
app.use((req, res)=>{
    return res.send("Acho que você se perdeu!");
})

app.listen(3300, ()=>console.log("Servidor rodando na porta 3300"))