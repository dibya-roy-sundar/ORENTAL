const express = require('express');
const catchAsync = require('../utils/catchAsync');
const multer = require('multer');
const { storage } = require('../cloudinary/index');
// const upload = multer({ dest: 'uploads/' });
// the above statement is used to store in local folder instead of cloudinary
const upload = multer({ storage });
const addOffice=require('../controllers/office')

const router = express.Router();


router.route('/add').post(upload.array('image'),catchAsync(addOffice));


module.exports = router;