import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import './Addoffice.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';

const Addoffice = () => {
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        phone: '',
        email: '',
        price: '',
        images: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setFormData({
            ...formData,
            images: files,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            toast.error('Please enter a valid email address');
            return;
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(formData.phone)) {
            toast.error('Please enter a valid 10-digit phone number');
            return;
        }
        if (!formData.name || !formData.location || !formData.phone || !formData.email || !formData.price || formData.images.length === 0) {
            toast.error('Please fill in all fields and upload at least one image');
        } else {
            console.log(formData);
            toast.success('Form submitted successfully');
        }
    };

    return (
        <div className="formA">
            <div className="formMain">
                <div className="addOffice-form">
                    <h2>Registration Form</h2>
                    <form onSubmit={handleSubmit}> {/* Add onSubmit event handler */}
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='John Doe' />
                        </div>
                        <div className="form-group">
                            <label>Location:</label>
                            <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder='Delhi, India' />
                        </div>
                        <div className="form-group">
                            <label>Phone No:</label>
                            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder='99999 99999' />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='johndoe@gmail.com' />
                        </div>
                        <div className="form-group">
                            <label>Price:</label>
                            <input type="text" name="price" value={formData.price} onChange={handleChange} placeholder='Rs. 300' />
                        </div>
                        <div className='form-group'>

                            <input type="checkbox" /> <FontAwesomeIcon icon={faWifi} />  Wifi
                            <br />
                            <input type="checkbox" /> <FontAwesomeIcon icon={faWifi} />  24/7 AC
                            <br />
                            <input type="checkbox" /> <FontAwesomeIcon icon={faWifi} />  Coffee Machine
                        </div>
                        <div className="form-group">
                            <label>Upload Images:</label>
                            <input type="file" name="images" onChange={handleImageChange} multiple />
                        </div>
                        <div className="btndiv">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                    <ToastContainer /> {/* Render ToastContainer component */}
                </div>
            </div>
        </div>
    );
};

export default Addoffice;
