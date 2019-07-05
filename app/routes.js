const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
  res.render('start')
})

router.post('/access', function (req, res) {
  console.log(req.body.access)
  res.redirect('/type')
})

router.post('/type', function (req, res) {
  req.body.type.forEach(mine => {
    console.log(mine)
  })
  res.redirect('/end')
})

router.get('/end', function (req, res) {
  res.render('end', { reference: 'MINE123' })
})

module.exports = router
