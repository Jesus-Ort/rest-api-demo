const express = require('express')
const app = express()
const port = 3000

const VariablePrueba = {
    Name: "Jesus",
    Edad: 21,
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/PruebaPost', (req, res) => {
    res.send(`Contenido de la request ${VariablePrueba}`) 
  })
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})