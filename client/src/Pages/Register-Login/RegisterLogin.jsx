import React, { useState } from 'react';
import './RegisterLogin.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import usePostFetch from '../../hooks/usePostFetch';
import { useNavigate } from 'react-router-dom';

const RegistrationAndLoginForm = () => {
  const navigate = useNavigate();

  const [userType, setUserType] = useState('user');
  const [isLogin, setIsLogin] = useState(true); // Initial state shows Login form
  const [name, setName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registrationEmail, setRegistrationEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleFormSwitch = () => {
    setIsLogin(!isLogin);
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // Check login fields for validity
    if (!loginEmail.trim() || !loginPassword.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(loginEmail.trim())) {
      toast.error('Please enter a valid email address');
      return;
    }
    // Perform login logic here
    const data = await usePostFetch('/login', {
      email: loginEmail,
      password: loginPassword,
    })
    console.log(data);
    if (data.data && data.data.user) {
      toast.success(`Hello ${data.data.user.name}`);
      navigate('/');
    }
    else if (data.data) {
      toast.warn(data.data.error || data.data.message);
    }
    else {
      toast.error(data.error);
    }
  };

  const handleRegistrationSubmit = async (e) => {
    e.preventDefault();
    // Check registration fields for validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[0-9]{10}$/;
    if (!phone.trim() || !password.trim() || !registrationEmail.trim()) {
      toast.error('Please fill in all fields');
      return;
    }
    if (!emailRegex.test(registrationEmail.trim())) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (!phoneRegex.test(phone.trim())) {
      toast.error('Please enter a valid 10-digit phone number');
      return;
    }
    const data = await usePostFetch('/register', {
      userType,
      name,
      email: registrationEmail,
      password,
      phnNo: phone,
    })
    console.log(data);
    if (data.data && data.data.user) {
      toast.success(`Hello ${data.data.user.name}`);
      navigate('/');
    }
    else if (data.data) {
      toast.warn(data.data.error || data.data.message);
    }
    else {
      toast.error(data.error);
    }
    // toast.success('Registration successful');
  };

  return (
    <div className='register-main'>
      <div className="registration-and-login-form">
        <h1>Welcome {isLogin ? (userType === 'user' ? 'User!' : 'Lister!') : `to ${userType === 'user' ? 'User' : 'Lister'} Registration!`}</h1>
        <ToastContainer />
        <div className="form-container">
          {isLogin ? (
            <div className="login-form">
              <h2>Login:</h2>
              <div className="user-type">
                <button
                  className={userType === 'user' ? 'active' : ''}
                  onClick={() => setUserType('user')}
                >
                  User
                </button>
                <button
                  className={userType === 'lister' ? 'active' : ''}
                  onClick={() => setUserType('lister')}
                >
                  Lister
                </button>
              </div>
              <form onSubmit={handleLoginSubmit}>
                <label htmlFor="loginEmail">Email:</label>
                <input
                  placeholder="Enter Your Email"
                  type="email"
                  id="loginEmail"
                  name="loginEmail"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
                <br />
                <label htmlFor="loginPassword">Password:</label>
                <input
                  placeholder='Enter Password'
                  type="password"
                  id="loginPassword"
                  name="loginPassword"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <br />
                <button type="submit">Login</button>
              </form>
            </div>
          ) : (
            <div className="registration-form">
              <h2>Registration:</h2>
              <div className="user-type">
                <button
                  className={userType === 'user' ? 'active' : ''}
                  onClick={() => setUserType('user')}
                >
                  User
                </button>
                <button
                  className={userType === 'lister' ? 'active' : ''}
                  onClick={() => setUserType('lister')}
                >
                  Lister
                </button>
              </div>
              <form onSubmit={handleRegistrationSubmit}>
                <label htmlFor="email">Name:</label>
                <input
                  placeholder='Enter Your Name'
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <label htmlFor="email">Email:</label>
                <input
                  placeholder='Enter Your Email'
                  type="email"
                  id="email"
                  name="email"
                  value={registrationEmail}
                  onChange={(e) => setRegistrationEmail(e.target.value)}
                />
                <br />
                <label htmlFor="phone">Phone Number:</label>
                <input
                  placeholder='Enter Phone Number'
                  type="tel"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <br />
                <label htmlFor="password">Password:</label>
                <input
                  placeholder='Enter Password'
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <button type="submit">Register</button>
              </form>
            </div>
          )}
        </div>
        <div className='regbtn'>
          <button onClick={handleFormSwitch}>
            {isLogin ? 'Switch to Registration' : 'Switch to Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationAndLoginForm;
