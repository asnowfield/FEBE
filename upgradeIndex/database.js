const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./quiz.db');

// // create the quizDB table
// db.run(`CREATE TABLE quizDB (
//   score INTEGER,
//   userName TEXT
// )`);

// insert data into the quizDB table
let score = 100;
let userName = "John";
db.run(`INSERT INTO quizDB (score, userName) VALUES (?, ?)`, [score, userName], function(err) {
  if (err) {
    return console.log(err.message);
  }
  console.log(`A row has been inserted with rowid ${this.lastID}`);
});

// close the database
db.close();
