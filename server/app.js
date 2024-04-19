import express from "express"

if (process.env.NODE_ENV != "production") {
    dotenv.config();
}


const dbUrl = process.env.ATLAS_URL;
mongoose
  .connect(dbUrl)
  .then(() => {
    console.log("successfully connected to the mongodb server");
  })
  .catch((err) => {
    console.log("mongodb connection  error!!!!");
    console.log(err);
    process.exit(1);
  });

const app = express();


app.use(cors({
      origin:process.env.CORS_ORIGIN,
      credentials:true,
}))


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Server started on port ${port}`);
});


