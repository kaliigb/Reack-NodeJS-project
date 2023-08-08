const db = require("../Router/connections");
async function getAll() {
  try {
    const sql = "SELECT * FROM login";
    const [rows] = await db.promise().query(sql);
    console.log("First character of the name:", rows); // Printing the first character of the name
    return rows;
  } catch (error) {
    throw error;
  }
}
async function checkSignup(name, email, password) {
  try {
    const sql =
      "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [name, email, password];

    const [result] = await db.promise().query(sql, values);
    const insertedId = result.insertId; // Get the ID of the inserted user

   

    return insertedId;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  checkSignup,
  getAll
};
