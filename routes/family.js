var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');

  //load a family view instead
  var familyList = ['Hayden','Carter','Ashley','Jesse'];

  res.render('family', { title: 'My Family',
    family: familyList
  });
});

module.exports = router;
