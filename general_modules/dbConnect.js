const { Pool } = require('pg');
const connectionString = process.env.DATABASE_URL || 'postgres://cxksbagbwrphss:93c84a9ef41a2a477353cdf4f70fdae6367f489a7a577e66ecc31bc56a8540ac@ec2-54-243-208-234.compute-1.amazonaws.com:5432/ddfno3jjf9snt3?ssl=true';
const pool = new Pool({connectionString: connectionString});
module.exports = pool;