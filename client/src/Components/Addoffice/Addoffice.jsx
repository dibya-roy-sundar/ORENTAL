import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';
import './Addoffice.scss';
import usePostFetch from '../../hooks/usePostFetch';
import { makeRequest } from '../../makerequest';
import { useNavigate } from 'react-router-dom';

const Addoffice = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        address: '',
        phone: '',
        email: '',
        price: '',
    });

    const [files, setFiles] = useState([]);

    const handleFileChange = (e) => {
        setFiles(e.target.files);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
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
        if (!formData.name || !formData.address || !formData.phone || !formData.email || !formData.price || files.length === 0) {
            toast.error('Please fill in all fields and upload at least one image');
            return;
        }

        const formDataToSend = new FormData();

        formDataToSend.append('name', formData.name);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('phnNo', formData.phone);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('price', formData.price);
        for (let i = 0; i < files.length; i++) {
            formDataToSend.append('files', files[i]);
        }

        try {
            const response = await makeRequest.post('/office/add', formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                withCredentials: true
            });
            console.log(response.data.office);
            toast.success('Office Listed successfully');
            navigate(`/office/${response.data.office._id}`);

        } catch (error) {
            console.error('Error uploading files:', error);
        }
    };


    return (
        <div className="formA">
            <div className="formMain">
                <div className="addOffice-form">
                    <h2>Registration Form</h2>
                    <form onSubmit={handleSubmit} encType='mutipart/form-data'> {/* Add onSubmit event handler */}
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='John Doe' />
                        </div>
                        <div className="form-group">
                            <label>address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder='Delhi, India' />
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
                        <div className="form-group">
                            <label>Upload Images:</label>
                            <input type="file" name="files" onChange={handleFileChange} multiple />
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
