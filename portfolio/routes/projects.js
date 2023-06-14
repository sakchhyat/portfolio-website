const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.render('projects/projects', { title: 'Projects ' });
  });
  


module.exports = router;