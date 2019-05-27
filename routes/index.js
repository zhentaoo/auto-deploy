var express = require('express');
var router = express.Router();
var child_process = require('child_process');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Little Finger Running' });
});

router.post('/js-tower', function(req, res, next) {
  console.log('js-tower');
  var option = {
    'cwd': '/data/source/js-tower',
  };

  result = child_process.spawnSync('git', ['pull'], option);
  console.log('stdout here: \n' + result.stdout);

  console.log('update js-tower blog success');
  res.send('<p>update success</p>');
});

router.post('/final-statement', function(req, res, next) {
  console.log('final-statement');
  var option = {
    'cwd': '/data/final-statement',
  };

  result = child_process.spawnSync('git', ['pull'], option);
  console.log('stdout here: \n' + result.stdout);

  console.log('update final-statement blog success');
  res.send('<p>update success</p>');
});

module.exports = router;
