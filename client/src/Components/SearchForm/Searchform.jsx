// SearchForm.js
import React from 'react';
import './Searchform.scss';

const SearchForm = () => {
    return (
        <>
            <form className="search-form">
                <input type="text" placeholder="Where are you going?" />
                <input type="date" placeholder="Check-in" />
                <button type="submit">Search</button>
            </form>
            {/*<div className='searchbuttons'>
                <div className='searchbuttons1'>
                    <h2>perMonth</h2>
                </div>
                <div className='searchbuttons2'>
                    <h2>perDay</h2>
                </div>
    </div>*/}
        </>

    );
}

export default SearchForm;
