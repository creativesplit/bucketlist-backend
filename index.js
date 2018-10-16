const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const ListItem = require('./db/model.js')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())
// app.use(express.static(__dirname + '/client/build'))

// app.get('/', (req,res) => {
//   res.sendFile(__dirname + /*'/client/build/index/html'*/ )
// })

//show bucket list items
app.get('/api/listItems', (req, res) => {
  ListItem.find()
    .then((newItems) => {
      res.json(newItems)
    })
    .catch((err) => {
      console.log(err)
    })
})

//create bucket list item
app.post('/api/listItems', (req, res) => {
  ListItem.create(req.body)
    .then((newItem) => {
      res.json(newItem)
    })
    .catch((err) => {
      console.log(err)
    })
})

//show specific bucket list item
app.get('/api/listItems/:id', (req, res) => {
  ListItem.findById(req.params.id)
    .then((newItem) => {
      res.json(newItem)
    })
    .catch((err) => {
      console.log(err)
    })
})
// delete an item by id
app.delete('/api/listItems/:id', (req, res) => {
  ListItem.findByIdAndRemove(req.params.id)
    .then((newItem) => {
      res.json(newItem)
    })
    .catch((err) => {
      console.log(err)
    })
})
// get an item by id and edit or update
app.put('/api/listItems/:id', (req, res) => {
  req.body.complete = req.body.complete ? true : false
  ListItem.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(newItem => {
      res.json(newItem)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
