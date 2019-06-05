const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line
router.get('/', function (req, res) {
  res.render('start.njk')
})

router.get('/access', function (req, res) {
  res.render('access.njk')
})

router.post('/access', function (req, res) {
  console.log(req.body.access)
  res.redirect('/type')
})

router.get('/type', function (req, res) {
  res.render('type.njk')
})

router.post('/type', function (req, res) {
  req.body.type.forEach(mine => {
    console.log(mine)
  })
  res.redirect('/end')
})

router.get('/end', function (req, res) {
  res.render('end.njk', { reference: 'MINE123' })
})

module.exports = router
