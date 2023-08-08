// Signin.js
const db = require('../Router/connections');

// Function to check login credentials in the database
async function checkLogin(email, password) {
  try {
    const sql = "SELECT * FROM login WHERE SUBSTRING(`name`, 1, 1) = 'a'";
    const [rows] = await db.promise().query(sql, [email, password]);

    // Log the data to check the format and contents
    console.log(rows);

    return rows; // Return the array of rows
  } catch (error) {
    throw error;
  }
}

module.exports = {
  checkLogin,
};
