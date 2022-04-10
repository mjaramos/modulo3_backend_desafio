import pg from 'pg';

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }

  const pool = new pg.Pool({
    connectionString:
      'postgres://nbfbgnlv:aRn6yHEoQjHAZkvrIW5TpzxNEHEZ0mpA@batyr.db.elephantsql.com/nbfbgnlv',
  });

  global.connection = pool;

  return pool.connect();
}

export { connect };
