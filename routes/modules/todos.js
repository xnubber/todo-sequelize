const express = require('express')
const router = express.Router()

const db = require('../../models')
const Todo = db.Todo


// new
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post('/', (req, res) => {
  // const userId = req.user.id
  console.log(req.user)
  res.send(req.user)
})



// show
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Todo.findByPk(id)
    .then(todo => res.render('show', { todo: todo.toJSON() }))
    .catch(error => console.log(error))
})


module.exports = router