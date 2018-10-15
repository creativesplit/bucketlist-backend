const express = require('express')
const r = express.Router()

const ListItemModel = require("../models/list-item");

// main landing page
r.get("/", (req, res) => {
  ListItemModel.find({})
    .then(bucketList => {
      res.json(ListItemModel);
    })
    .catch(err => console.log(err));
});

r.get("/new", (req, res) => {
  res.render("todos/new");
});

//to add a new bucket list item
r.post("/", (req, res) => {
  ListItemModel.create(req.body)
  .then(bucketList => {
    res.redirect("/");
  });
});

//to see a bucket list item
r.get("/:id", (req, res) => {
  ListItemModel.findOne({ _id: req.params.id })
    .then(bucketList => {
      res.render("todos/show", todo);
    })
    .catch(err => console.log(err));
});

// edit a specific bucket list item
r.get("/edit/:id", (req, res) => {
  ListItemModel.findOne({ _id: req.params.id })
  .then(bucketList => {
    res.render("todos/edit", todo);
  });
});

//to update a bucket list item
r.put("/:id", (req, res) => {
  req.body.complete = req.body.complete ? true : false
  ListItemModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).then(
    bucketList => {
      res.redirect("/");
    }
  );
});

//to delete a bucket list item
r.delete("/:id", (req, res) => {
  ListItemModel.findOneAndRemove({ _id: req.params.id })
  .then(() => {
    res.redirect("/");
  });
});

module.exports = r