import sql from './db.ts'

// console.log(sql)

const results = await (sql`select * from api_test where id = $1`, [1]);
console.log(results)