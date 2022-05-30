const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, start, end FROM availabilities LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function create(availabilities){
  const result = await db.query(
    `INSERT INTO availabilities 
    (start,end) 
    VALUES 
    (${availabilities.start}, ${availabilities.end})`
  );

  let message = 'Error in creating availabilities';

  if (result.affectedRows) {
    message = 'availabilities created successfully';
  }

  return {message};
}
async function remove(id){
  const result = await db.query(
    `DELETE FROM availabilities WHERE id=${id}`
  );

  let message = 'Error in deleting availabilities';

  if (result.affectedRows) {
    message = 'availabilities deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  remove
}