import React from "react";
import "./App.css";
import { Link, useLocation, NavLink, Outlet, useNavigate } from "react-router";
// Link Component: The Link component is used for navigation between different routes in a React application without reloading the page. It provides a way to change the URL and navigate to a different component. This is useful for simple navigation where no specific styling is required for active links.

// NavLink Component: The NavLink is a special version of Link that adds styling attributes to the rendered element when it matches the current URL. It provides a way to add styles to the link when it is the current URL. This is particularly useful for navigation menus where you want to highlight the currently active route

function App() {
  const navigate=useNavigate();// here useNavigate() are hook.
  const location = useLocation();
  console.log(location);
  
  return (
    <>
      <div>
        <ul>
          <li>
            <button onClick={()=>navigate(-1)}>back Button</button>
          </li>
          <li>
            <NavLink to="/">
            
            Home</NavLink>
          </li>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
          <li>
            {/* <NavLink to="/contact">Contact</NavLink> */}
            <button onClick={()=>navigate('/contact')} >Go to Contact Page</button>
          </li>
 
          {/* <li>
            <NavLink to='/post'> Post id page</NavLink>
          </li> */}
        </ul>
        {/*Outlet is a component that are used to rendering components. */}
        <Outlet />
      </div>
    </>
  );
}
export default App;

