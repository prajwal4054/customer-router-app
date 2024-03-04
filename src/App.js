
import React, { useState } from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavigationBar } from "./components/NavigationBar";
import CustomerList from "./components/CustomerList";
import CustomerForm from "./components/CustomerForm";
import customerdata from "./components/customers.json";
import About from "./components/About";
import EditCustomer from "./components/EditForm";
import CustomerDetails from "./components/CustomerDetails";

export function App() {
  const [customers, setCustomers] = useState(customerdata);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const addCustomer = (customer) => {
    // const fs = require('fs');

    setCustomers([...customers, customer]);

  };

  const handleUpdate = (updatedCustomer) => {
    const updatedCustomers = customers.map((c) =>
      c.id === updatedCustomer.id ? updatedCustomer : c
    );
    setCustomers(updatedCustomers);
    setSelectedCustomer(null);
  };

  const handleRowClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const router = createBrowserRouter([
    // Your router configurations
    {
            path: "/",
            element: (
              <>
                <NavigationBar />
                <div>
                  <Link to="/addcustomer">Create new Customer</Link>
                </div>
      
                <CustomerList
                  customers={customerdata}
                  handleClick={handleRowClick}
                  selectCustomer={selectedCustomer}
                  handleUpdate={handleUpdate}
                />
              </>
            ),
          },
          {
            path: "/customers",
            element: (
              <>
                <NavigationBar />
                <p>This is customers page</p>
              </>
            ),
          },
          {
            path: "/about",
            element: (
              <>
                <NavigationBar />
                <About />
              </>
            ),
          },
          {
            path: "/scb",
            element: (
              <>
                <NavigationBar />
                <p>This is scb page</p>
              </>
            ),
          },
          {
            path: "/addcustomer",
            element: (
              <>
                <NavigationBar />
                <CustomerForm addCustomer={addCustomer} />
              </>
            ),
          },
          {
            path: "/showcustomer",
            element: (
              <>
                <NavigationBar />
                <CustomerDetails customer={selectedCustomer} />
              </>
            ),
          },
  ]);

  return (
    <>
      <RouterProvider router={router}>
        <NavigationBar />
        <div>
          <Link to="/addcustomer">Add Customer</Link>
        </div>
        <CustomerList
          customers={customers}
          // handleClick={handleRowClick}
          selectCustomer={selectedCustomer}
          handleUpdate={handleUpdate}
        />
        {selectedCustomer && (
          <EditCustomer
            customer={selectedCustomer}
            onClose={() => setSelectedCustomer(null)}
            handleUpdate={handleUpdate}
          />
        )}
      </RouterProvider>
    </>
  );
}

export default App;
