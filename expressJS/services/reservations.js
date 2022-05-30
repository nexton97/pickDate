const db = require('./db');
const helper = require('../helper');
const config = require('../config');


async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, start, end, title, email FROM reservations LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function create(reservations){
  const result = await db.query(
    `INSERT INTO reservations 
    (start,end,title,email) 
    VALUES 
    ('${reservations.start}', '${reservations.end}', '${reservations.title}', '${reservations.email}' )`
  );

  let message = 'Error in creating reservations';

  if (result.affectedRows) {
    message = 'reservations created successfully';
  }

  return {message};
}
async function remove(id){
    const result = await db.query(
      `DELETE FROM reservations WHERE id=${id}`
    );
  
    let message = 'Error in deleting reservation';
  
    if (result.affectedRows) {
      message = 'reservation deleted successfully';
    }
  
    return {message};
  }
module.exports = {
  getMultiple,
  create,
  remove
}