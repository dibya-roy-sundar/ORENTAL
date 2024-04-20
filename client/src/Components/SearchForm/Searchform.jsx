// SearchForm.js
import React from 'react';
import './Searchform.scss';

const SearchForm = () => {
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const today = formatDate(new Date());
    return (
        <>
            <form className="search-form">
                <input type="text" placeholder="Location" />
                <input type="date" defaultValue={today} placeholder="Check-in" />
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
