import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import customerdata from './customers.json'
import 'bootstrap/dist/css/bootstrap.min.css'
const CustomerForm = ({ addCustomer}) => {
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    var x = customerdata.length + 1;
    addCustomer({
      id: x, // Auto-incrementing ID
      ...formData,
    });
    customerdata.push({id:x,...formData });
    setFormData({ firstName: '', lastName: '', email: '' });
    
    navigate('/');
  };
  return (
    <div>
      <h4>Add Customer</h4>
      <form onSubmit={handleSubmit} className='form-group'>
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className='form-control'
        /> <br></br>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className='form-control'
        /> <br></br>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className='form-control'  
        /><br></br>
        <button type="submit" className='btn btn-warning'>Add Customer</button>
      </form>
    </div>
  );
};

export default CustomerForm;