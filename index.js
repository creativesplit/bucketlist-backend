const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const mongoose = require('./db/model.js')
const ListItem = mongoose.model('ListItem')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())
app.use(express.static(__dirname + '/client/build'))

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + /*'/client/buuld/index/html'*/ )
// })

//show bucket list items
app.get('http://localhost:3001/api/translations', (req, res) => {
  ListItem.find()
    .then((newItems) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
    })
})

//create bucket list item
app.post('http://localhost:3001/api/translations', (req, res) => {
  ListItem.create(req.body)
    .then((newItem) => {
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
    })
})

//show specific bucket list item
app.get('http://localhost:3001/api/translations/:id', (req, res) => {
  ListItem.findById(req.params.id)
    .then((newItem) => {
      res.json(item)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
