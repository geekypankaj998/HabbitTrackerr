const express = require('express');
const router = express.Router();

console.log('routes loaded');
router.get('/',function(req,resp){
     resp.render('home',{
         title: 'Home Page'
     }); 
});

module.exports = router;