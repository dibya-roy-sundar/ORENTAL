const mongoose = require('mongoose');

const officeSchema = mongoose.Schema({
    name: String,
    location: String,
    latitude: String,
    longitde: String,
    phNO: String,
    email: String,
    price: String,
    images: [{
        url: String,
        filename: String,
    }],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    bookedDays: [{
        type: Date,
    }],
    previousBooking: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = mongoose.model('Office', officeSchema);
