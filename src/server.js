const express = require("express") //biblioteca criar servidor
const server = express()
const routes = require("./routes")
const path = require("path")

//usando template engine
server.set('view engine', 'ejs')

//Mudar a localização da pasta views
server.set('views', path.join(__dirname, 'views'))

//habilitar arquivos statics
//criando rotas para arquivos estaticos
server.use(express.static("public"))

//usar/habilitar req.body
server.use(express.urlencoded({extended: true}))

//routes 
server.use(routes)

server.listen(3333, () => console.log('rodando'))