import express from 'express'
import cors from 'cors'
import * as db from '../db/index.js'

const app = express()
const port = 3000

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors())

// app.get('/test', (req, res) => {
//     res.send('Hello World!')
// })

app.get('/test', async (req, res, next) => {
    try{
        const result = await db.query('SELECT * FROM api_test WHERE id = $1', [1])
        res.send(result.rows[0])
    } catch(error) {
        console.error(error)
    }

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})