//   index.js
//where to pages

//require express
const express = require('express');

//router 
const router = express.Router();

//GET store page
router.get('/store', (req, res) => {
	res.render('store', {title: 'Store'});
});

//GET sign up page
router.get('/signUp', (req, res) => {
	res.render('signUp', {
		title: 'Sign up'
	});
});


module.exports = router;
