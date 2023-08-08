const mysql= require('mysql2');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'signup',
     limit:500
  });
  
  db.getConnection((err) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
  });
  module.exports = db;