// Placefind.js
import React from 'react';
import './Placefind.scss';
import ListingCard from '../../Components/ListingCard/ListingCard';
import SearchForm from '../../Components/SearchForm/Searchform';
const Placefind = () => {
    return (
        <div>
            <div className="search-section">
                <h1>Find Your Perfect Place</h1>
                <SearchForm />
            </div>
            <div className="listing-section">
                <h2>Popular Listings</h2>
                <div className="listing-cards">
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    {/* Add more listing cards */}
                </div>
            </div>
        </div>
    );
}

export default Placefind;
