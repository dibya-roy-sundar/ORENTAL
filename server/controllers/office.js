const cloudinary = require('../cloudinary/index')
const Office = require('../models/office')

module.exports.addOffice = async (req, res, next) => {
   const { name, location, latitude, longitude, phnNo, email, price } = req.body;
   const office = new Office({
      name,
      location,
      latitude,
      longitude,
      phnNo,
      email,
      price,
   });
   office.images = req.files.map(f => ({ url: f.path, filename: f.filename }))
   // office.owner = req.user.id;
   await office.save();
   res.status(200).json({
      success: true,
      office,
   })
}

module.exports.getOfficeData = async (req, res, next) => {
   const { id } = req.params;
   const office = await Office.findById(id);
   res.status(200).json({
      success: true,
      office,
   })
}

module.exports.editOffice = async (req, res, next) => {
   const { name, location, latitude, longitude, phnNo, email, price } = req.body;
   const { id } = req.params;
   const office = await Office.findByIdAndUpdate(id,{
      name,
      location,
      latitude,
      longitude,
      phnNo,
      email,
      price,
   });

   const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
   office.images.push(...imgs);
   await office.save();
   if (req.body.deleteImages) {
      for (let filename of req.body.deleteImages) {
         await cloudinary.uploader.destroy(filename);
      }
      await campground.updateOne({ $pull: { images: { filename: { $in: req.body.deleteImages } } } })
   }

   res.status(200).json({
      success:true,
      office,
   });
}