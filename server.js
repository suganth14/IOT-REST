const express = require('express');
const app = express();
const user = require('./data.js')
const bodyparser = require('body-parser')

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));

app.get('/users',(req,res)=>{
  res.send(user)
})

app.get('/users/:id',(req,res)=>{
  let id = req.params.id
  user.forEach((item, i) => {
    if(item.id==id)
      res.send(item)
  });
})

app.post('/users',(req,res)=>{
  const USER = req.body
  USER.id = user.length + 1
  user.push(USER)
  res.send("PUSHED!")
})

app.put('/users/:id',(req,res)=>{
  const USER = req.body
  const id = req.params.id
  user.forEach((item, i) => {
    if(item.id==id){
      USER.id = id
      user[i] = USER
      res.send("Updated")
    }
  });

  res.send("SHIT!")
})

app.delete('/users/:id',(req,res)=>{
    const id = req.params.id

    user.forEach((item, i) => {
      if(item.id==id){
        user.splice(i,1)
        res.send("Deleted")
      }
    });

    res.send("SHIT!")
})

app.listen(3000,()=>{
  console.log("Server started at 3000!");
})
