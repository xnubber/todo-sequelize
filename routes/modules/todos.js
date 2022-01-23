const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo


// show
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('show', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})


module.exports = router