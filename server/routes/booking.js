const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { bookOffice } = require('../controllers/booking');

const router = express.Router({ mergeParams: true });

router.route('/:id').post(catchAsync(bookOffice));

module.exports = router;