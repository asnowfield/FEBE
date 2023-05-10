const sqlite3 = require("sqlite3").verbose();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("static"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/clkvalue/:dificult", (req, res) => {
  const { dificult } = req.params;
  if (dificult == "ez") {
    res.sendFile(__dirname + "/quiz.html");
  } else if (dificult == "nm") {
    res.sendFile(__dirname + "/quiz.html");
  } else {
    res.sendFile(__dirname + "/quiz.html");
  }
});

app.get("/rank/:dificulty", (req, res) => {
  const { dificulty } = req.params;
  if (dificulty == "ez") {
    res.sendFile(__dirname + "/rank.html");
  } else if (dificulty == "nm") {
    res.sendFile(__dirname + "/rank.html");
  } else {
    res.sendFile(__dirname + "/rank.html");
  }
})

app.get("/result", (req, res) => {
  res.sendFile(__dirname + "/result.html");
});

app.get("/rank", (req, res) => {
  res.sendFile(__dirname + "/rank.html");
});

app.post("/resultData", (req, res) => {
  var score = req.body.score;
  var userName = req.body.userName;
  let db = new sqlite3.Database("quiz.db");
  db.run(
    `INSERT INTO quizDB (score, userName) VALUES (?, ?)`,
    [score, userName],
    function (err) {
      if (err) {
        return console.log(err.message);
      }
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );
  db.close();
  res.sendStatus(200);
});

app.post("/rank/:difficulty", (req, res) => {
  const difficulty = req.params.difficulty;
  let db = new sqlite3.Database("quiz.db");
  let tableName = "";

  // Determine the table name based on the difficulty
  if (difficulty === "ez") {
    tableName = "easyTable";
  } else if (difficulty === "nm") {
    tableName = "normalTable";
  } else {
    tableName = "hardTable";
  }

  db.all(
    "SELECT userName, score FROM "+tableName+" ORDER BY score DESC LIMIT 3",
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
