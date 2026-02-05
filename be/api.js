
import sql from './db.mts'
import express from 'express'
import cors from 'cors'

const app = express();
const port = 3000;

// Adds headers: Access-Control-Allow-Origin: *
app.use(cors());

app.get('/test', async (req, res) => {
    try {
        const result = await sql(`select * from api_test where id = $1`, [1]);
        res.send(result);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: error.message });
    }

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});