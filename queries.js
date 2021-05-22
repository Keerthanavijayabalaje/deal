const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertdeal = (request, response) => {
const { id, oppotunityid, percentfunded, percentcommitted, retaining, deal_status_id, resourcetype, created, updated } = request.body
  pool.query( "INSERT INTO cbanc2.deal (id, oppotunityid, percentfunded, percentcommitted, retaining, deal_status_id, resourcetype, created, updated) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",[id, oppotunityid, percentfunded, percentcommitted, retaining, deal_status_id, resourcetype, created, updated], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in deal')
  })
}


module.exports = {
insertdeal
}
