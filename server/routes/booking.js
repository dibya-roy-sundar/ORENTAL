const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { bookOffice } = require('../controllers/booking');
const { isLoggedIn } = require('../middlewares/isLoggedIn');

const router = express.Router({ mergeParams: true });

router.route('/:id').post(isLoggedIn, catchAsync(bookOffice));

module.exports = router;