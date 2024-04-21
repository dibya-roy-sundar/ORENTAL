const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    place: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Office',
        required: true,
    },
    bookedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    bookingDate: [
        {
            type: String,
        }
    ]
});
module.exports = mongoose.model('Booking', bookingSchema);