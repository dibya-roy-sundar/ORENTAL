// ListingCard.js
import React from 'react';
import './ListingCard.scss';
import image5 from '../../assets/Placeimages/house-5.png';

const ListingCard = ({officedata}) => {

    return (
        <div className="listing-card">
            
            <img src={officedata.images[0].url} alt="Listing" />
            <div className="details">
                <h2>{officedata.name}</h2>
                <p>{officedata.address} &bull; 2 guests &bull; 1 bedroom &bull; 1 bed &bull; 1 bath</p>
                <p>${officedata.price}/night</p>
            </div>
        </div>
    );
}

export default ListingCard;
