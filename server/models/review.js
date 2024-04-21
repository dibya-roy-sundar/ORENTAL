const mongoose = require('mongoose');


const reviewSchema=mongoose.Schema({
    body:{
        type:String,
        required:true,
    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }

})


module.exports = mongoose.model('Review', reviewSchema);