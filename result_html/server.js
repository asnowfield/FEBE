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

// app.get("/clkvalue/ez", (req, res) => {
//   res.sendFile(__dirname + "/quiz.html");
//   console.log("ez");
// });
// app.get("/clkvalue/nm", (req, res) => {
//   res.sendFile(__dirname + "/quiz.html");
//   console.log("nm");
// });
// app.get("/clkvalue/hd", (req, res) => {
//   res.sendFile(__dirname + "/quiz.html");
//   console.log("hd");
// });

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

app.get("/result", (req, res) => {
  res.sendFile(__dirname + "/result.html");
});

app.get("/rank", (req, res) => {
  res.sendFile(__dirname + "/rank.html");
});

app.post("/resultData", (req, res) => {
  var score = req.body.score;
  var userName = req.body.userName;
  // open the database
  let db = new sqlite3.Database("quiz.db");

  // insert data into the quizDB table
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

  // close the database
  db.close();

  res.sendStatus(200);
});

app.listen(port, () => {
  console.log("serverOn");
});
