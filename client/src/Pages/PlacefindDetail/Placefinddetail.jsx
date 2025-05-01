import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider.jsx';
import useGetFetch from '../../hooks/useGetFetch';
import usePostFetch from '../../hooks/usePostFetch.js';
import './Placefinddetail.scss';
import 'react-calendar/dist/Calendar.css';
import usePostFetch from '../../hooks/usePostFetch';
import { toast } from 'react-toastify';

const Placefinddetail = () => {
    const isLoggedIn = localStorage.getItem('token') !== null;
    const id = useParams().id;
    const { data, loading, error } = useGetFetch(`/office/${id}`);

    const [selectedDates, setSelectedDates] = useState([]);
    const [isChoosingDates, setIsChoosingDates] = useState(false);


    const handleDateSelect = (date) => {
        setSelectedDates(date);
    };
    const handleBookNow = () => {
        setIsChoosingDates(true);
    };
    const handleConfirmBooking =async () => {
        // Logic to confirm booking using selectedDates
        // You can send a request to your backend here
        // For now, let's just log the selected dates
        console.log("Booking confirmed for dates:", selectedDates);

        if (!selectedDates || selectedDates.length !== 2) {
            console.error("Invalid date range selected.");
            return;
        }
    
        const [startDate, endDate] = selectedDates.map(date => new Date(date));
        const datesInRange = [];
    
        for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
            // Clone the date to avoid mutation issues
            datesInRange.push(new Date(d));
        }
    
        console.log("Booking confirmed for dates:", datesInRange);
        const data = await usePostFetch(`/office/book/${id}`, { date: datesInRange });
        console.log(data);
        if(data.success){
            toast.success(`Booking successfull`);
        }
        
    
        // Here you can send datesInRange to your backend instead of selectedDates
        // Example:
        // axios.post("/api/book", { dates: datesInRange })
    
        setIsChoosingDates(false);
        window.location.reload();
    };

    return (
        <>
            {
                loading
                    ? <>LOADING</>
                    : error
                        ? 'error'
                        :
                        <div className="house-details">
                            <div className="house-title">
                                <h1>{data.office?.name}</h1>
                                <div className="row">
                                    <div>
                                        <p>{data.office?.address}</p>
                                    </div>
                                </div>
                            </div>
                            <Slider images={data.office?.images} />
                            <div className="small-details">
                                {isLoggedIn && <button className='booking' onClick={handleBookNow}>
                                    Book Now
                                </button>}
                                
                                <h2>{data.office?.phnNo}</h2>
                                <p>{data.office?.email}</p>
                                <h4>Rs {data.office?.price}/day</h4>
                            </div>
                            {isChoosingDates && (
                                <div className="calendar-container">
                                    <Calendar
                                        onChange={handleDateSelect}
                                        value={selectedDates}
                                        selectRange={true}
                                        allowPartialRange={true}
                                        minDate={new Date()}
                                        tileDisabled={({ date, view }) => {
                                            if (view !== 'month') return false; // only disable in month view
                                            const formattedDate = date.toISOString().split('T')[0]; // e.g., "2024-04-29"
                                            return data.office.bookedDays.includes(date);
                                          }}
                                    />
                                    <button className="confirm-booking" onClick={handleConfirmBooking}>
                                        Confirm Booking
                                    </button>
                                </div>
                            )}
                            <hr className="line" />
                            {isLoggedIn && <div className='review'>
                                <h2>Reviews</h2>
                                <div className='reviewcontainer'>
                                    <div className='reviewtext'>
                                        <input type="text" placeholder="Write a review" />
                                    </div>
                                    <button>Add Review</button>
                                </div>
                            </div>}
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
            }
        </>
    );
};
export default Placefinddetail;