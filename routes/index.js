//   index.js
const express = require('express');

const router = express.Router();

router.get('/store', (req, res) => {
	res.render('store', {
		title: 'Store Page'
	});
});

router.post('/store', (req, res) => {
	res.render('store', {
		title: 'Store Page'
	});
});

router.get('/signUp', (req, res) => {
	res.render('signUp', {
		title: 'Sign up'
	});
});


module.exports = router;
