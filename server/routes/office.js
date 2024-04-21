const express = require('express');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const { storage } = require('../cloudinary/index');
// const upload = multer({ dest: 'uploads/' });
// the above statement is used to store in local folder instead of cloudinary
const upload = multer({ storage });
const { addOffice, getOfficeData, editOffice } = require('../controllers/office');
const { isLoggedIn } = require('../middlewares/isLoggedIn');
const { isOwner } = require('../middlewares/isOwner');

const router = express.Router({ mergeParams: true });

router.route('/add').post(isLoggedIn ,upload.array('files'), catchAsync(addOffice));
router.route('/:id').get(catchAsync(getOfficeData));
router.route('/edit/:id').put(isLoggedIn , upload.array('files'), catchAsync(editOffice));

module.exports = router;