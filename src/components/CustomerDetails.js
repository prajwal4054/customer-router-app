import React from 'react';
import { useNavigate } from 'react-router-dom';
const CustomerDetails = ({ customer }) => {
    const navigate=useNavigate();
    function onClickHandler(){
        navigate("/");
    }
  return (
    <div>
      <h4>Customer Details</h4>
      {customer && (
        <div className='card' >
          <p className='card-header'>ID: {customer.id}</p>
          <p className='card-header'>First Name: {customer.firstName}</p>
          <p className='card-header'>Last Name: {customer.lastName}</p>
          <p className='card-header'>Email: {customer.email}</p>
          <button onClick={onClickHandler}>Back</button>
        </div>
      )}
    </div>
  );
};

export default CustomerDetails;