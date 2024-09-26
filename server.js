const express = require('express')
const app = express()
const conn = require('./db/conn')
const web = require('./routes/web')
conn.authenticate().then(() => {
    console.log(`Connected database...`)
}).catch((err) => {
    console.log(`Error in Connection Database...${err}`)
})
app.use(express.json())

app.use('/', web)
const hostname = '127.0.0.1'
const port = '3003'
app.listen(port, hostname, () => {
    try {
        console.log(`server has been started...http://${hostname}:${port}`)
    } catch (error) {
        console.log(`Error in server connection.....`)
    }
})
