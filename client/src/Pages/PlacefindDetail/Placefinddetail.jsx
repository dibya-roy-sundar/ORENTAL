import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useGetFetch from '../../hooks/useGetFetch';
import Slider from '../../Components/Slider/Slider.jsx';
import Calendar from 'react-calendar';
import './Placefinddetail.scss';
import 'react-calendar/dist/Calendar.css';

const Placefinddetail = () => {
    const id = useParams().id;
    const { data, loading, error } = useGetFetch(`/office/${id}`);
    console.log(data.images);

    const [selectedDates, setSelectedDates] = useState([]);
    const [isChoosingDates, setIsChoosingDates] = useState(false);

    const handleDateSelect = (date) => {
        setSelectedDates(date);

    };
    const handleBookNow = () => {
        setIsChoosingDates(true);
    };
    const handleConfirmBooking = () => {
        // Logic to confirm booking using selectedDates
        // You can send a request to your backend here
        // For now, let's just log the selected dates
        console.log("Booking confirmed for dates:", selectedDates);
        setIsChoosingDates(false);
    };
    return (
        <div className="house-details">
            <div className="house-title">
                <h1>{data.name}</h1>
                <div className="row">
                    <div>
                        <p>{data.address}</p>
                    </div>
                </div>
            </div>
            <Slider />
            <div className="small-details">
                <button className='booking' onClick={handleBookNow}>
                    Book Now
                </button>
                <h2>{data.phnNo}</h2>
                <p>{data.email}</p>
                <h4>{data.price}/day</h4>
            </div>
            {isChoosingDates && (
                <div className="calendar-container">
                    <Calendar
                        onChange={handleDateSelect}
                        value={selectedDates}
                        selectRange={true}
                        allowPartialRange={true}
                    />
                    <button className="confirm-booking" onClick={handleConfirmBooking}>
                        Confirm Booking
                    </button>
                </div>
            )}
            <hr className="line" />
            <div className='review'>
                <h2>Reviews</h2>
                <div className='reviewcontainer'>
                    <div className='reviewtext'>
                        <input type="text" placeholder="Write a review" />
                    </div>
                    <button>Add Review</button>
                </div>
            </div>
            <ul className="details-list">
                <li>
                    <i className="fas fa-home"></i>Entire Home
                    <span>You will have the entire flat for you.</span>
                </li>
            </ul>
            <hr className="line" />
            <p className="home-desc">
                Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment that has a true city feeling. The price quoted is for two guests; at the guest slot, please mark the number of guests to get the exact price for groups.
            </p>
            <hr className="line" />
        </div>
    );
};
export default Placefinddetail;
