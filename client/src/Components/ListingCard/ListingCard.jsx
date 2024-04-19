// ListingCard.js
import React from 'react';
import './ListingCard.scss';
import image5 from '../../assets/Placeimages/house-5.png';

const ListingCard = () => {
    return (
        <div className="listing-card">
            <img src={image5} alt="Listing" />
            <div className="details">
                <h2>Beautiful Apartment in Downtown</h2>
                <p>Entire apartment &bull; 2 guests &bull; 1 bedroom &bull; 1 bed &bull; 1 bath</p>
                <p>$100/night</p>
            </div>
        </div>
    );
}

export default ListingCard;
