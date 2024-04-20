const express = require('express');
const catchAsync = require('../utils/catchAsync');
const { getSearchData } = require('../controllers/search');

const router = express.Router({ mergeParams: true });

router.route('/').get(catchAsync(getSearchData));


module.exports = router;