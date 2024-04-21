const Review = require("../models/review");

module.exports.addReview=async (req,res,next)=>{
    const {id}=req.params.id;
    const {content}=req.body;
    const office = await Office.findById(id);
    const  review= new Review({
        content,
        author:req.user
    });
    await review.save();
    campground.reviews.push(review);
    await campground.save();
}
module.exports.deleteReview=async (req,res,next)=>{
    const { id, reviewid } = req.params;
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await Review.findByIdAndDelete(reviewid);

}