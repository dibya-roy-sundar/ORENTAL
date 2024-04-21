const mongoose = require('mongoose');


const reviewSchema=mongoose.Schema({
    content:{
        type:String,
        required:true,
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

})


module.exports = mongoose.model('Review', reviewSchema);