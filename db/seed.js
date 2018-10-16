//const mongoose = require('/connections')
const ListItem = mongoose.model('ListItem')
const SeedData = require('./ListItem-data.json') 

ListItem.remove({})
  .then(() => {
    ListItem.collection.insert(SeedData)
      .then((listItems) => {
        console.log(listItems)
        process.exit()
      })
  })
  .catch((err) => {
    console.log(err)
  })


