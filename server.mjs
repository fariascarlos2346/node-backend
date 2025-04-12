import express from 'express';  //jeito novo de importar o express.

const app = express()

app.get('/usuarios', (req, res) => {
    res.send("Hello Bia, World!")
})

app.listen(3000)