const express = require('express')

const route = express.Router()

route.get('/', (req,res,next) => {
    try {
        res.status(200).send('Hello User!')
    } catch (error) {
        next(new Error('Internal Server Error'))
    }
})

route.post('/user', (req,res,next) => {
    try {
        const data = req.body
        res.status(200).send(data)
    } catch (error) {
        next(new Error('Internal Server Error'))
    }
})

route.post('/name/:name', (req,res,next) => {
    try {
        const data = req.params.name
        res.status(200).send(data)
    } catch (error) {
        next(new Error('Internal Server Error'))
    }
})


module.exports = route