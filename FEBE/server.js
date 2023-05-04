const express = require('express')
var cors = require('cors')
const app = express()
const port = 8080
app.use(cors())

app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/index.html');
})

// app.get('/user/:id', (req, res)=>{
//   const q = req.params
//   console.log(q.id)
//   const q = req.query
//   /console.log(q.q)
//   res.json({'userid':q.name})
// });

app.get('/sound/:name',(req,res)=>{
  const { name } = req.params
  if (name == "Oh") {
    res.json({'sound': 'NO'})
  } else if (name == "pizza") {
    res.json({'sound': 'amazing'})
  } else {
    res.json({'sound':'excuse'})
  }
})

app.listen(port,()=>{
  console.log("wow")
});
