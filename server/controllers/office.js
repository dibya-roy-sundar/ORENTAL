const cloudinary = require('../cloudinary/index')
const Office = require('../models/office')
const axios=require('axios');

module.exports.addOffice = async (req, res, next) => {
   const { name, address, phnNo, email, price } = req.body;
   const response=await axios.get(`https://geocode.maps.co/search?q=${address}&api_key=${process.env.GOOGLE_MAP_API_KEY}`);
   
   const location={
      type:'Point',
      coordinates:[response.data[0].lat,response.data[0].lon],
   }
   const office = new Office({
      name,
      location,
      address,
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
   const { name, address, phnNo, email, price } = req.body;
   const response=await axios.get(`https://geocode.maps.co/search?q=${address}&api_key=${process.env.GOOGLE_MAP_API_KEY}`);
   const location={
      type:'Point',
      coordinates:[response.data[0].lat,response.data[0].lon],
   }
   const { id } = req.params;
   const office = await Office.findByIdAndUpdate(id,{
      name,
      location,
      address,
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