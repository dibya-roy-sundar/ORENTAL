const mongoose = require('mongoose');
const review = require('./review');

const officeSchema = mongoose.Schema({
    name: String,
    location: {
        type: {
          type: String, // Don't do `{ location: { type: String } }`
          enum: ['Point'], // 'location.type' must be 'Point'
          required: true
        },
        coordinates: {
          type: [Number],
          required: true
        }
      },
    address:String,
    phnNO: String,
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
        type: String,
    }],
    previousBooking: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Booking'
        }
    ],
    reviews:[
        {
            
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
})

module.exports = mongoose.model('Office', officeSchema);
