require('express')()
.get("/", (req, res) => {
    return res.send('Hi from proffy')
})
.get("/study", (req, res) => {
    return res.send('Página Study')
})
.listen(5000)