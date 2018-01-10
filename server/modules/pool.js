const pg = require('pg');
const Pool = pg.Pool;
const config = {
    database: 'koala_holla',
    host: 'localhost',
    post: 5432,
    Max: 10,
    idleTimeoutMillis: 5000
}

const pool = new Pool(config);

module.exports = pool;