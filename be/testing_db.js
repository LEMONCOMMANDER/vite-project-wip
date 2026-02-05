import sql from './db.mts'

// console.log(sql)

const results = await sql`select * from api_test where id = ${1}`
console.log(results)