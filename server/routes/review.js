
const express=require('express');

const router = express.Router({ mergeParams: true });


router.route('/add').post( catchAsync(bookOffice));
router.route('/:revid/delete').delete( catchAsync(bookOffice));


module.exports = router;