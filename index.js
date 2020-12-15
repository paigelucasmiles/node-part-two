const { response } = require('express')
const express = require('express')
const app = express()
const port = 4000

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}) );
app.use(bodyParser.json());

const candies = [
    {id: 1, name: "Skittles"},
    {id: 2, name: "Starburst"},
    {id: 3, name: "Reeses"}
]

app.get('/', (_, response) => {
    response.send({ message: "whatever" })
})

app.get('/candies', (_, response) => {
    response.json(candies)
})

app.get('/candies/:id', (request, response) => {
    const candy =
        candies.find(candy => candy.id === +request.params.id);
    response.json(candy);
})

app.post('/candies', (request, response) => {
    console.log(request.body)
})

app.listen(port, () => console.log(`listening on port ${port}`))