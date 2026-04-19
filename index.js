const  express = require('express')
var cors = require('cors')
require("./connection")


var stuModel = require("./Model/Student")

const app = express()

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
  res.send('hello world')
})

app.get('/sample',(req,res) => {
  req.send("trial message")
})


app.post('/add', (req, res) => {
    stuModel(req.body).save()
    res.send("data added")
  })
  

app.get('/view',async (req,res) =>{
  var data=await stuModel.find()
  res.send(data)
})

app.delete('/remove/:id',async (req,res) =>{
  await stuModel.findByIdAndDelete(req.params.id)
  res.send("data deleted")
})

app.put('/edit/:id',async (req,res) =>{
  await stuModel.findByIdAndUpdate(req.params.id,req.body)
   res.send("data updated")
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})