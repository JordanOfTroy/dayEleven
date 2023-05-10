require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())

app.use(express.urlencoded({extended: false}))

app.get('/*pp*', (req, res) => {
    res.send('all good')
})

app.route('/route').get((req, res) => {
    res.send('from a get request')
}).post((req, res) => {
    let {count, color} = req.body
    res.send(`From a post request: count - ${count} | color - ${color}`)
})

app.get('/users/:userID/:color/:school/:from-:to', (req, res) => {
    let {userID, color, school, from, to} = req.params
    res.send(`your user ID is: ${userID} | ${color} | ${school} | ${from} - ${to}`)
})

app.listen(PORT, () => {
    console.log(`Master has given Dobby a port ${PORT}`)
})