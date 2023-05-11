require('dotenv').config()
const express = require('express')
const router = express.Router()

router.use(function timeLog(req, res, next) {
    const date = new Date()
    console.log(`The date is: ${date}`)
    next()
})

router.get('/', (req, res) => {
    res.send(`Welcome to the Student page!`)
})

router.get('/:id', (req, res) => {
    console.log(req.params)
    let {id} = req.params
    console.log(`id: ${id}`)
    res.send(`You are searching for Student ID: ${id}`)
})

module.exports = router