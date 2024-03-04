// import React, { useState } from "react";
// import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
// //import { NavigationBar } from "./components/NavigationBar";
// import CustomerList from "./components/CustomerList";
// import CustomerForm from "./components/CustomerForm";
// import { NavigationBar } from "./components/NavigationBar";
// import customerdata from "./components/customers.json";
// import About from "./components/About";
// import CustomerDetails from "./components/CustomerDetails";

// export function App() {
//   const [customers, setCustomers] = useState(customerdata);

//   const addCustomer = (customer) => {
//     setCustomers([...customers, customer]);
//   };
//   const [selectedCustomer, setSelectedCustomer] = useState(null);
//   const handleUpdate = (updatedCustomer) => {
//     // Update customer data in state or database (implementation needed)
//     const updatedCustomers = customers.map((c) =>
//       c.id === updatedCustomer.id ? updatedCustomer : c
//     );
//     setCustomers(updatedCustomers);
//     setSelectedCustomer(null); // Close edit form
//   };
//   const handleRowClick = (customer) => {
//     setSelectedCustomer(customer);
//   };
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: (
//         <>
//           <NavigationBar />
//           <div>
//             <Link to="/addcustomer">Add Customer</Link>
//           </div>

//           <CustomerList
//             customers={customerdata}
//             handleClick={handleRowClick}
//             selectCustomer={selectedCustomer}
//             handleUpdate={handleUpdate}
//           />
//         </>
//       ),
//     },
//     {
//       path: "/customers",
//       element: (
//         <>
//           <NavigationBar />
//           <p>This is customers page</p>
//         </>
//       ),
//     },
//     {
//       path: "/about",
//       element: (
//         <>
//           <NavigationBar />
//           <About />
//         </>
//       ),
//     },
//     {
//       path: "/scb",
//       element: (
//         <>
//           <NavigationBar />
//           <p>This is scb page</p>
//         </>
//       ),
//     },
//     {
//       path: "/addcustomer",
//       element: (
//         <>
//           <NavigationBar />
//           <CustomerForm addCustomer={addCustomer} />
//         </>
//       ),
//     },
//     // {
//     //   path: "/editcustomer",
//     //   element: (
//     //     <>
//     //       <NavigationBar />
//     //       {/* <EditForm addCustomer={addCustomer} /> */}
//     //       <EditForm customer={emptyCustomer} handleUpdate={handleUpdate} />
//     //     </>
//     //   ),
//     // },
//     {
//       path: "/showcustomer",
//       element: (
//         <>
//           <NavigationBar />
//           <CustomerDetails customer={selectedCustomer} />
//         </>
//       ),
//     },
//   ]);
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

// App.js