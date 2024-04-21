const axios = require("axios");
const Office = require("../models/office");

module.exports.getSearchData = async (req, res, next) => {
  const { address, date } = req.query;
  const response = await axios.get(
    `https://geocode.maps.co/search?q=${address}&api_key=${process.env.GOOGLE_MAP_API_KEY}`
  );
  const lat = response.data[0].lat;
  const lon = response.data[0].lon;
  

  // based on earth properties ,more accurate
  const offices = await Office.find({
    location:{$geoWithin:{$centerSphere:[[lat,lon],10/3963.2]}},
    bookedDays: { $ne: date }
  });

 

  res.status(200).json({
    success: true,
    offices,
  });

  // based on simple distance
  // await Office.find({location:{$near:{$maxDistance:10000,$geometry:{type:'Point',coordinates:[-79.3,43.6]}}}});

  //within a particular area - geojson.io
  // await Office.find({location:{$geoWithin:{$geometry:{type:'Polygon',coordinates:[
  //     [
  //         [
  //             77.27594706587388,
  //             28.578113570198212
  //           ],
  //           [
  //             77.27700135734989,
  //             28.542274309528167
  //           ],
  //           [
  //             77.33427820334305,
  //             28.544818025497662
  //           ],
  //           [
  //             77.33271490788172,
  //             28.578113750137376
  //           ],
  //           [
  //             77.27594706587388,
  //             28.578113570198212
  //           ]
  //     ]
  // ]}}}});

  // within a particular radius
  // await Office.find({location:{$geoWithin:{$centerSphere:[[-79.3,43.6],10/3963.2]}}});//within 10 miles ,miles/radius of earth
};
