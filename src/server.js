const proffys = [
    { 
        name: "Michael Santos",
        avatar: "https://avatars1.githubusercontent.com/u/48392472?s=460&u=b292476541f8a8d12f1ec199cb15aebe10676326&v=4",
        whatsapp: "84998198060",
        bio: "Entusiasta das melhores tecnologias de português avançado. Apaixonado por literatura técnica e livros de comédia para poder compartilhar um pouco de conhecimento em forma de comédia.",
        subject: "Portugês",
        cost: "20,00",
        weekday: [0],
        time_from: [840],
        time_to: [1500]
     },
     { 
        name: "Néfi Samuel",
        avatar: "https://avatars1.githubusercontent.com/u/48392472?s=460&u=b292476541f8a8d12f1ec199cb15aebe10676326&v=4",
        whatsapp: "84998198060",
        bio: "Entusiasta das melhores tecnologias de português avançado. Apaixonado por literatura técnica e livros de comédia para poder compartilhar um pouco de conhecimento em forma de comédia.",
        subject: "História",
        cost: "20,00",
        weekday: [2],
        time_from: [840],
        time_to: [1500]
     }
]


function pageLanding(req, res) {
    return res.render('index.htm')
}

function pageStudy(req, res) {
    return res.render('study.htm', { proffys })
}

function pageGiveClasses(req, res) {
    return res.render('give-classes.htm')
} 

const express = require('express')
const server = express()

// Configuration nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
// Configuration archives static (css, scripts, image)
.use(express.static("public"))
// Route of application
.get("/", pageLanding) // Roda do diretório principal
.get("/study", pageStudy) // Rota da página study
.get("/give-classes", pageGiveClasses) // Rota da página study
.listen(5000)