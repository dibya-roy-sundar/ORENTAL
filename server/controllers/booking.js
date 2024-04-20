const Booking = require('../models/booking');

module.exports.bookOffice = async (req, res, next) => {
    const { id } = req.params;
    const { bookedBy, date } = req.body;
    const booking = new Booking({
        place: id,
        bookedBy,
    })

    date.map(d => {
        booking.push(d);
    });

    await booking.save();

    res.status(200).json({
        success: true,
        booking,
    });
}