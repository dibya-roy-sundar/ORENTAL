import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useParams } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider.jsx';
import useGetFetch from '../../hooks/useGetFetch';
import usePostFetch from '../../hooks/usePostFetch.js';
import './Placefinddetail.scss';
const Placefinddetail = () => {
    const id = useParams().id;
    const { data, loading, error } = useGetFetch(/office/${id});
    const [selectedDates, setSelectedDates] = useState([]);
    const [isChoosingDates, setIsChoosingDates] = useState(false);

    const handleDateSelect = (date) => {
        setSelectedDates(date);
    };
    const handleBookNow = () => {
        setIsChoosingDates(true);
    };
    const handleConfirmBooking = async (e) => {
        // Logic to confirm booking using selectedDates
        // You can send a request to your backend here
        // For now, let's just log the selected dates
        // setIsChoosingDates(false);
        const resp = await usePostFetch(/office/book/${id}, {
            date: selectedDates
        });
        if (resp.data?.booking) {
            alert('Booking successful');
        }
        else if (resp.data.error) {
            alert(resp.data.error);
        }
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
                                <button className='booking' onClick={handleBookNow}>
                                    Book Now
                                </button>
                                <h2>{data.office?.phnNo}</h2>
                                <p>{data.office?.email}</p>
                                <h4>{data.office?.price}/day</h4>
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
                            {/* <div className='review'>
                <h2>Reviews</h2>
                <h2>this side yash mittal</h2>
                <button>Add Review</button>
            </div> */}
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