import postgres from 'postgres'
import 'dotenv/config'

const sql = postgres('',{
    host: 'localhost',
    user: 'postgres',
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
})

export default sql
