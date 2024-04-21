import React from 'react';
import './Placefinddetail.scss';
import image1 from '../../assets/Placeimages/house-1.png';
import image2 from '../../assets/Placeimages/house-2.png';
import image3 from '../../assets/Placeimages/house-3.png';
import image4 from '../../assets/Placeimages/house-4.png';
import image5 from '../../assets/Placeimages/house-5.png';
import { useParams } from 'react-router-dom';
import useGetFetch from '../../hooks/useGetFetch';
import Slider from '../../Components/Slider/Slider.jsx'
const Placefinddetail = () => {
    const id = useParams().id;

    const { data, loading, error } = useGetFetch(`/office/${id}`);
    console.log(data.images);

    return (
        <div className="house-details">
            <div className="house-title">
                <h1>{data.name}</h1>
                <div className="row">
                    <div>
                        <p>{data.address}</p>
                    </div>
                </div>
            </div>
            <Slider images={data.images}/>
            <div className="gallery">
                <div className="gallery-img1">
                    <img src={image1} alt="" />
                </div>
                <div className="gallery-img2">
                    <img src={image2} alt="" />
                </div>
                <div className="gallery-img3">
                    <img src={image3} alt="" />
                </div>
                <div className="gallery-img4">
                    <img src={image4} alt="" />
                </div>
                <div className="gallery-img5">
                    <img src={image5} alt="" />
                </div>
            </div>
            <div className="small-details">
                <h2>{data.phnNo}</h2>
                <p>{data.email}</p>
                <h4>{data.price}/day</h4>
            </div>
            <hr className="line" />
            {/* <div className='review'>
                <h2>Reviews</h2>
                <h2>this side yash mittal</h2>
                <button>Add Review</button>
            </div> */}
            <ul className="details-list">
                <li><i className="fas fa-home"></i>Entire Home
                    <span>You will have the entire flat for you.</span>
                </li>
                {/* Add more details */}
            </ul>
            <hr className="line" />
            <p className="home-desc">
                Guests will be allocated on the ground floor according to availability. You get a comfortable two-bedroom apartment that has a true city feeling. The price quoted is for two guests; at the guest slot, please mark the number of guests to get the exact price for groups.
            </p>
            <hr className="line" />
        </div>
    );
}

export default Placefinddetail;
