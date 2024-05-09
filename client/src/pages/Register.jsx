import React, { useState } from 'react';
import axios from 'axios';
import "../../src/styles/register.css"
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Register = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    gender: '',
    age: '',
    mobile: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (passwordValidation()) {
      try {
        const userRegistrationData = {
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          password: formData.password,
          address: formData.address,
          gender: formData.gender,
          age: formData.age,
          mobile: formData.mobile,
        };

        await axios.post('http://localhost:5000/api/user/register', userRegistrationData);
        setSuccessMessage('Registration successful!');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
          address: '',
          gender: '',
          age: '',
          mobile: '',
        });
      } catch (error) {
        setErrorMessage(error.response?.data?.message || 'Registration failed. Please try again.');
      }
    }
  };

  const passwordValidation = () => {
    const { password, confirmPassword } = formData;

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return false;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return false;
    }

    setErrorMessage(''); // Clear any previous error messages
    return true;
  };

  return (
    <>
    <Navbar/>
    <div className="container">
      <h2>Register Here</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
      <form onSubmit={handleSubmit}>
      <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">First Name</label>
        <input
          type="text"
          className='form-control'
          name="firstname"
          id="exampleInputEmail1" aria-describedby="emailHelp"
          value={formData.firstname}
          onChange={handleChange}
          required
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Last Name</label>
        <input
          type="text"
          className='form-control'
          name="lastname"
          id="exampleInputEmail1" aria-describedby="emailHelp"
          value={formData.lastname}
          onChange={handleChange}
          required
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          name="email"
          className='form-control'
          id="exampleInputEmail1" aria-describedby="emailHelp"
          value={formData.email}
          onChange={handleChange}
          required
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>

        <input
          type="password"
          name="password"
          class="form-control" id="exampleInputPassword1"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          class="form-control" id="exampleInputPassword1"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          minLength={8}
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Address</label>
        <textarea
          name="address"
          class="form-control" aria-label="With textarea"
          value={formData.address}
          onChange={handleChange}
          required
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Gender</label>
        <select name="gender" id="gender" class="form-select" aria-label="Default select example" value={formData.gender} onChange={handleChange}>
          <option selected>Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Age</label>
        <input
          type="number" // Use type="number" for numeric input
          name="age"
          className='form-control'
          id="exampleInputEmail1" aria-describedby="emailHelp"
          value={formData.age}
          onChange={handleChange}
          required
        />
        </div>
        <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Mobile Number</label>
        <input
          type="tel" // Use type="tel" for phone numbers
          name="mobile"
          className='form-control'
          id="exampleInputEmail1" aria-describedby="emailHelp"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        </div>
        <button type="submit" class="btn btn-primary">Register</button>
      </form>
      <p>
          Already a user?{" "}
          <NavLink
            className="login-link"
            to={"/login"}
          >
            Login Here
          </NavLink>
        </p>
    </div>
    <Footer/>
    </>
  );
};

export default Register;

