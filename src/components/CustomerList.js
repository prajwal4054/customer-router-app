import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";

const CustomerList = ({ customers, handleClick,handleUpdate}) => {
  const [filteredCustomers, setFilteredCustomers] = useState(customers); // Track filtered customers
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const deleteHandler = (customerId) => {
    setFilteredCustomers(filteredCustomers.filter((c) => c.id !== customerId));
  };
  const editCustomer = (customer) => {
    setSelectedCustomer(customer);
  };
  
  return (
    <div className="row">
      <h2 className="card bg-dark text-white text-center mb-3 p-3">
        Customer List
      </h2>
      <table className="m-2 table table-striped table-hover table-bordered table-md">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.map((customer) => (
            <tr key={customer.id} onClick={() => handleClick(customer)}>
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.email}</td>
              <td>
                <Link to="/showcustomer">show </Link>
                <Link onClick={() => deleteHandler(customer.id)}>delete </Link>

                <Link onClick={() => editCustomer(customer)}>edit</Link>
              </td>
            </tr>
          ))}
          {selectedCustomer && (
            <EditForm
              customer={selectedCustomer}
              onClose={() => setSelectedCustomer(null)}
              handleUpdate={handleUpdate}
            />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
