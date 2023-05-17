const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use(express.static("static"));
//To index.html
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

//index.html
app.get("/:select", (req, res) => {
  const { select } = req.params;
  if (select == "3life") {
    res.sendFile(__dirname + "/selection.html");
  } else if (select == "10sec") {
    res.sendFile(__dirname + "/selection.html");
  }
});

//selection.html
app.get("/clkvalue/:mode/:dificult", (req, res) => {
  const { mode } = req.params;
  const { dificult } = req.params;
  if (mode) {
    const quizURL = `/quiz/${mode}/${dificult}`;
    // Redirect to the quiz page with the extracted parameter
    res.redirect(quizURL);
  } else {
    res.send("Parameter not found.");
  }
});
app.get("/quiz/:mode/:dificulty", (req, res) => {
  res.sendFile(__dirname + `/quiz.html`);
});

//quiz.html
app.get("/result/:paraMode/:paraDifucult", (req, res) => {
  res.sendFile(__dirname + "/result.html");
})

//result.html
app.get("/rank/:mode/:dificult", (req, res) => {
  res.sendFile(__dirname + "/rank.html");
});

app.post("/resultData/:mode/:dificult", (req, res) => {
  const { mode, dificult } = req.params;
  var score = req.body.score;
  var userName = req.body.userName;
  let db = new sqlite3.Database("quiz.db");
  db.run(
    `INSERT INTO "${mode}" (score, userName, difficulty) VALUES (?, ?, ?)`,
    [score, userName, dificult],
    (err) => {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
  db.close();
  res.sendStatus(200);
});


//rank.html
app.post("/rank/:mode/:difficulty", (req, res) => {
  const { mode, difficulty } = req.params;
  let db = new sqlite3.Database("quiz.db");

  // Determine the table name based on the difficulty
  db.all(
    `SELECT userName, score FROM "${mode}" WHERE difficulty = ? ORDER BY score DESC LIMIT 3 `,
    [difficulty],
    (err, rows) => {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
        return;
      }
      res.send(rows);
      console.log(rows);
      db.close();
    }
  );
});

app.listen(port, () => {
  console.log("serverOn");
});
