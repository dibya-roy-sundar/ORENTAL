if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}


const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRoutes = require('./routes/user');
const officeRoutes = require('./routes/office');
const bookingRoutes = require('./routes/booking');
const errorMiddleware = require('./middlewares/error');
const ErrorHand = require('./utils/errorhand');
const cookieParser = require('cookie-parser');
const cors = require('cors');

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

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}))

app.use('/', userRoutes);
app.use('/office', officeRoutes);
app.use('/office/book', bookingRoutes);

app.use(errorMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});


