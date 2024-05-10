const mysql = require('mysql');

const con = mysql.createConnection({
  host: 'localhost',
  user: 'yourusername',
  password: 'yourpassword',
  database: 'mydb' 
});

con.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');

  const createAdminsTable = `
    CREATE TABLE IF NOT EXISTS admins (
      admin_id INT PRIMARY KEY,
      email VARCHAR(255),
      password VARCHAR(255),
      role VARCHAR(50)
    )
  `;

  const createModeratorsTable = `
    CREATE TABLE IF NOT EXISTS moderators (
      moderator_id INT PRIMARY KEY,
      email VARCHAR(255),
      password VARCHAR(255),
      role VARCHAR(50)
    )
  `;

  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      user_id INT PRIMARY KEY,
      email VARCHAR(255),
      password VARCHAR(255),
      role VARCHAR(50)
    )
  `;

  con.query(createAdminsTable, (err) => {
    if (err) throw err;
    console.log('Admins table created');
  });

  con.query(createModeratorsTable, (err) => {
    if (err) throw err;
    console.log('Moderators table created');
  });

  con.query(createUsersTable, (err) => {
    if (err) throw err;
    console.log('Users table created');
  });

  con.end();
});
