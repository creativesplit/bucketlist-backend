const express = require('express')

const ListItemSchema = new mongoose.Schema({
    title: String,
    description: String,
    url: String,
    complete: Boolean
  });
  
  const Todo = mongoose.model("Todo", ToDoSchema);
  
  module.exports = Todo;
  