const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;
app.use(cors());
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
    // res.json({'dificulty': 'ez'})
  } else if (dificult == "nm") {
    // res.json({'dificulty': 'nm'})
    res.sendFile(__dirname + "/quiz.html");
  } else {
    // res.json({'dificulty':'hd'})
    res.sendFile(__dirname + "/quiz.html");
  }
});

app.get("/result", (req, res) => {
  res.sendFile(__dirname + "/result.html");
});

app.listen(port, () => {
  console.log("serverOn");
});

// app.get('/user/:id', (req, res)=>{
//   const q = req.params
//   console.log(q.id)
//   const q = req.query
//   console.log(q.q)
//   res.json({'userid':q.name})
// });

// app.get('/quiz/:clkValue',(req,res)=>{
//   const {clkValue} = req.params
//   if (clkValue == "ez") {
//     res.json({'dificulty': 'ez'})
//     res.sendFile(__dirname+'/quiz.html');
//   } else if (clkValue == "nm") {
//     res.json({'dificulty': 'nm'})
//     res.sendFile(__dirname+'/quiz.html');
//   } else {
//     res.json({'dificulty':'hd'})
//     res.sendFile(__dirname+'/quiz.html');
//   }
// })
