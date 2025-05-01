// ListingCard.js
import React from 'react';
import './ListingCard.scss';
import image5 from '../../assets/Placeimages/house-5.png';
import { useNavigate } from 'react-router-dom';

const ListingCard = ({officedata}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/office/${officedata._id}`);  // or whatever route you want
    }
    function getRandomHundredMultiple(min = 7000, max = 10000) {
        const minMultiple = min / 100;
        const maxMultiple = max / 100;
        const randomMultiple = Math.floor(Math.random() * (maxMultiple - minMultiple + 1)) + minMultiple;
        return randomMultiple * 100;
      }
      const randomNumber = getRandomHundredMultiple();

    return (
        <div className="listing-card" onClick={handleClick} style={{ cursor: 'pointer' }}>
            
            <img src={officedata.images[0].url} alt="Listing" />
            <div className="details">
                <h2>{officedata.name}</h2>
                <p>{randomNumber} sq. ft.</p>
                <p>Rs {officedata.price}/night</p>
            </div>
        </div>
    );
}

export default ListingCard;
