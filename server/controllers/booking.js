const Booking=require('../models/booking');
const Office = require('../models/office');


module.exports.bookOffice = async (req, res, next) => {
    const { id } = req.params;
    const office = await Office.findById(id);
    const {  date } = req.body;
    // bookedBy=req.user;
    const booking = new Booking({
        place: office,
        bookedBy,
        bookingDate:date,
    })

    // date.map(d => {
    //     booking.push(d);
    // });

    await booking.save();

    req.user.bookedEvents.push(booking);
    office.previousBooking.push(booking);

    
    
 
    

    res.status(200).json({
        success: true,
        booking,
    });
}

