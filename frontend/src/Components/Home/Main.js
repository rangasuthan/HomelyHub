//importing react library from react in to this js file
import React from 'react'
import { Outlet } from "react-router-dom";
// Outlet is used to render the content of nested routes
import Header from "./Header";
import Footer from "./Footer";

//Arrow function
const Main = () => {
  return (
    <div>
      {/* Rendering the header, Footer component and Outlet */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main