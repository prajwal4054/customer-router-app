// EditCustomer.js
import React, { useState } from "react";

const EditCustomer = ({ customer, onClose, handleUpdate }) => {
  const [formData, setFormData] = useState({
    firstName: customer.firstName,
    lastName: customer.lastName,
    email: customer.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate({ ...customer, ...formData });
    onClose();
  };

  return (
    <div>
      <h4>Edit Customer</h4>
      <form onSubmit={handleSubmit} className="form-group">
        <input
          type="text"
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          className="form-control"
        />{" "}
        <br></br>
        <input
          type="text"
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="form-control"
        />{" "}
        <br></br>
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
        />
        <br></br>
        <button type="submit" className="btn btn-warning">
          Update Customer
        </button>
      </form>
    </div>
  );
};

export default EditCustomer;
