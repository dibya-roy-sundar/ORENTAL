const cloudinary=require('../cloudinary/index')
const Office = require('../models/office')

module.exports.addOffice=async (req,res,next)=>{
   const office=new Office(req.body);
   office.images = req.files.map(f => ({ url: f.path, filename: f.filename }))
   office.owner=req.user;
   await office.save();
}
module.exports.editOffice=async (req,res,next)=>{
    
}