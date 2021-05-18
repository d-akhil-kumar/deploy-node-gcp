const express = require('express')
const route = require('./route')
const app = express()

app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}));

app.use('/', route)
app.use((req, res, next) => {
  next(new Error('Invalid URL'))
})

app.use((error, req, res, next) => {
  res.send(error.message)
})


let port = process.env.PORT || 8080
app.listen(port, () => console.log(`server is running on port ${port}`))