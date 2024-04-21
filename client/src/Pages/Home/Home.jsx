import React from 'react'
import './Home.scss';
import main_girl from './main_girl.png';
import person1 from './person1.png';
import person2 from './person2.png';
import person3 from './person3.png';
import maintenanceLogo from './maintenanceLogo.png';
import priceLogo from './priceLogo.png';
import reservedLogo from './reservedLogo.png';
import { Link } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/Searchform';


const Home = () => {
    return (
        <div className='mainOuter'>
            <div className="header">
                <div className="navbar">
                    <div className="left">
                        <SearchForm />
                    </div>
                    <div className="right">
                        <Link to='/registerlogin'><button className='navItemRight'>Login/SignUp</button></Link>
                        <Link to='/officeadd'><button className='navItemRight'>Add Office</button></Link>

                    </div>
                </div>
            </div>
            <div className="hero">
                <div className="mainContent">
                    <div className="left">
                        <h1>ORental</h1>
                        <Link to='/findoffice'> <button> Find Offices</button></Link>
                    </div>
                    <div className="right">
                        <img src={main_girl} className='mainGirlImg' />
                    </div>
                </div>
            </div>
            <div className="overview">
                <div className="overviewContent">
                    <div className="up">
                        <h3 className="left">Overview</h3>
                        <p className="right">Simplified access to modern office spaces with flexible booking options, revolutionizing workspace arrangements for businesses and individuals, fostering productivity, collaboration, and convenience in today's dynamic work environment.</p>
                    </div>
                </div>
            </div>
            <div className="overviewDown overview">
                <div className="overviewContent">
                    <div className="down">
                        <img src={person1} className='imgPerson p1' />
                        <img src={person2} className='imgPerson p2' />
                        <img src={person3} className='imgPerson p3' />
                    </div>
                </div>
            </div>
            <div className="amenities">
                <div className="left">
                    <div className="content">
                        <h2>Basic Amenities</h2>
                        <p className="detail">The office spaces offer essential amenities such as high-speed internet, ergonomic furniture, meeting rooms, and kitchen facilities. Additional features may include parking, printing services, reception assistance, and complimentary refreshments, ensuring a conducive work environment for users.</p>
                        <h3>600+</h3>
                        <p>Happy Workers</p>
                        <h3>135+</h3>
                        <p>Office Spaces</p>
                    </div>
                </div>
                <div className="right">
                    <div className="content">
                        <div className="card">
                            <div className="left">
                                <img src={reservedLogo} className='logo' />
                            </div>
                            <div className="right">
                                <h4>Reserved Spaces</h4>
                                <p>Reserved spaces offer dedicated workstations or offices, ensuring privacy and consistency for users' work needs</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="left">
                                <img src={priceLogo} className='logo' />
                            </div>
                            <div className="right">
                                <h4>Affordable Pricing</h4>
                                <p>Affordable prices provide accessible workspace solutions, catering to diverse budgets and enabling businesses and individuals to optimize their resources effectively</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="left">
                                <img src={maintenanceLogo} className='logo' />
                            </div>
                            <div className="right">
                                <h4>Timely Maintenance</h4>
                                <p>Timely maintenance ensures optimal functionality and reliability of facilities, fostering a seamless user experience in the workspace environment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="content">
                    <h3>Made by Team PixelPulse</h3>
                </div>
            </div>
        </div>
    )
}

export default Home