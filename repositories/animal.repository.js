import { connect } from './db.js';

async function insertAnimal(animal) {
  const conn = await connect();

  try {
    const sql =
      'INSERT INTO animais (nome, tipo, proprietario_id) VALUES ($1, $2, $3) RETURNING *';
    const values = [animal.nome, animal.tipo, animal.proprietario_id];

    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
    throw error;
  } finally {
    conn.release();
  }
}

async function getAnimals() {
  const conn = await connect();

  try {
    const res = await conn.query('SELECT * FROM animais ORDER BY animal_id');
    return res.rows;
  } catch (error) {
  } finally {
    conn.release();
  }
}

async function getAnimalsByProprietarioId(proprietarioId) {
  const conn = await connect();

  try {
    const res = await conn.query(
      'SELECT * FROM animais WHERE proprietario_id = $1 ORDER BY animal_id',
      [proprietarioId]
    );
    return res.rows;
  } catch (error) {
  } finally {
    conn.release();
  }
}

async function getAnimal(id) {
  const conn = await connect();

  try {
    const sql = 'SELECT * FROM animais WHERE animal_id = $1';
    const values = [id];
    const res = await conn.query(sql, values);
    return res.rows[0];
  } catch (error) {
  } finally {
    conn.release();
  }
}

async function deleteAnimal(id) {
  const conn = await connect();

  try {
    const sql = 'DELETE FROM animais WHERE animal_id = $1';
    const values = [id];
    await conn.query(sql, values);
  } catch (error) {
  } finally {
    conn.release();
  }
}

async function updateAnimal(animal) {
  const conn = await connect();

  try {
    const sql =
      'UPDATE animais SET nome = $1, tipo = $2 WHERE animal_id = $3 RETURNING *';
    const values = [animal.nome, animal.tipo, animal.animal_id];

    const res = await conn.query(sql, values);

    return res.rows[0];
  } catch (error) {
  } finally {
    conn.release();
  }
}

export default {
  insertAnimal,
  getAnimals,
  getAnimal,
  updateAnimal,
  deleteAnimal,
  getAnimalsByProprietarioId,
};
