const connect = require('@databases/pg');

let db = false;

const getDb = () => {
  const host = 'database';
  const port = process.env.POSTGRES_PORT || '5432';
  const user = process.env.POSTGRES_USER || 'fatimat';
  const password = process.env.POSTGRES_PASSWORD || 'password';
  const database = process.env.POSTGRES_DB || 'fullstack_database';

  if (!db) {
    const connectionString = `postgres://${user}:${password}@${host}:${port}/${database}`;
    db = connect(connectionString);
  }
  return db;
};

module.exports = getDb;
