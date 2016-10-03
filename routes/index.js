var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',
  message: 'This is where my family lives'
  });
});

router.get('/Hayden', function(req,res,next){
  //show Haydens blurb
  var haydenText = ('Hayden is my 5 year old daughter.  She loves horseback' +
  ' riding, colouring and reading books.');
  res.render('Hayden', {
    title: 'Hayden',
    Hayden: haydenText
  })
});

router.get('/Carter', function(req,res,next){
  //show Carters blurb
  var carterText = ('Carter is my girlfriend Ashleys son.  He loves baseball and hockey (watching and playing!), and ' +
  'also loves learning of all kinds, whether it is math or reading.)');
  res.render('Carter', {
    title: 'Carter',
    Carter: carterText
  })
});

router.get('/Ashley', function(req,res,next){
  //show Ashleys blurb
  var ashleyText = ('Ashley is my girlfriend of over 3 years.  She is currently working at RBC as a contractor for ' +
  'the Information Architecture team. Her job is to do wireframes for all of RBCs sites, as well as QA, and client relations.');
  res.render('Ashley', {
    title: 'Ashley',
    Ashley: ashleyText
  })
});

router.get('/Jesse', function(req,res,next){
  //show Jesses blurb
  var jesseText = ('I am Jesse, I created this lab. I enjoy playing hockey, rugby, and golf.  I also love watching baseball, and hockey.');
  res.render('Jesse', {
    title: 'Jesse',
    Jesse: jesseText
  })
});


module.exports = router;
