// Placefind.js
import React, { useState } from 'react';
import './Placefind.scss';
import ListingCard from '../../Components/ListingCard/ListingCard';
import SearchForm from '../../Components/SearchForm/Searchform';
import image5 from '../../assets/Placeimages/house-5.png';
import useGetFetch from '../../hooks/useGetFetch';
const Placefind = () => {
    const [address, setAddress] = useState('');
    const [searchDate, setSearchDate] = useState('');
    const { data, loading, error } = useGetFetch(`/search/?address=${address}&date=${searchDate}`);
    console.log(data);
    return (
        <div>
            <div className="search-section">
                <h1>Find Your Perfect Place</h1>
                <SearchForm address={address} setAddress={setAddress} searchDate={searchDate} setSearchDate={setSearchDate} />
            </div>
            <div className="listing-section">
                <h2>Popular Listings</h2>
                <div className="listing-cards">
                    {loading
                        ? <>LOADING</>
                        : error ? 'error' :
                            data.offices && data.offices.map((eachData) => {
                                return <ListingCard officedata={eachData} />
                            })
                    }
                    {/* <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard />
                    <ListingCard /> */}
                    {/* Add more listing cards */}
                </div>
            </div>
        </div>
    );
}

export default Placefind;
