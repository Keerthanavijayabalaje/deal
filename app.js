const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./queries')
const port = 4000

app.use(bodyParser.json())

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.post('/loan', db.insertdeal)


app.listen(4000, () => {
  console.log(`Server is running.`);
});
