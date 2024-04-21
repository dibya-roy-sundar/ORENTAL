// SearchForm.js
import React, { useState } from 'react';
import './Searchform.scss';

const SearchForm = ({address,setAddress,searchDate,setSearchDate}) => {
    const [add,setAdd]=useState('');
    const [date,setDate]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();
        setAddress(add);
        setSearchDate(date);
    }

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const today = formatDate(new Date());
    return (
        <>
            <form className="search-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Location" value={add} onChange={e=>setAdd(e.target.value)}/>
                <input type="date" defaultValue={today} placeholder="Check-in" value={date} onChange={e=>setDate}/>
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
