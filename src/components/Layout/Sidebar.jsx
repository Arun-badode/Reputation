import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Sidebar.css";
import { MdOutlineUpgrade } from "react-icons/md";
import { RiLogoutBoxRFill } from "react-icons/ri";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [activeMenuIndex, setActiveMenuIndex] = useState(null); // Active menu item index
  const [openMenuIndex, setOpenMenuIndex] = useState(null); // Open submenu index
  const [userRole, setUserRole] = useState(null); // 'admin' or 'customer' role
  const navigate = useNavigate();

  // Get the user role from localStorage when the component mounts
  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  const toggleMenu = (index) => {
    setOpenMenuIndex(openMenuIndex === index ? null : index);
  };

  const handlesubmenuclick = (index, path) => {
    setActiveMenuIndex(index);
    setOpenMenuIndex(null); // Close the submenu
    navigate(path); // Navigate to the given path
  };

  const handleLogout = () => {
    // Optional: Clear localStorage/session etc. here
    // localStorage.removeItem("token"); 
    navigate("/");
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? "expanded" : "collapsed"}`}>
        {/* Sidebar toggle icon */}
        <div className="sidebar-toggle" onClick={toggleSidebar}></div>

        <ul className="menu">
          {/* Dashboard */}
          <li
            className={`menu-item ${activeMenuIndex === 0 ? "active" : ""}`}
            onClick={() => handlesubmenuclick(0, "/dashboard")}
          >
            <div className="menu-link">
              <i className="nav-icon fas fa-home menu-icon" />
              {isOpen && <span className="menu-text" onClick={toggleSidebar}>Dashboard</span>}
            </div>
          </li>
          {/* Reports */}
          <li
            className={`menu-item ${openMenuIndex === 1 ? "open" : ""} ${
              activeMenuIndex === 1 ? "active" : ""
            }`}
           onClick={() => handlesubmenuclick(1, "/admin/result")}
          >
            <div className="menu-link menu-i">
              <i className="fa-solid fa-chart-bar menu-icon"></i>
              {isOpen && <span className="menu-text" onClick={toggleSidebar}>Results</span>}
            </div>
          </li>
          {/* Manage Customer (Admin Only) */}
          
            <li
              className={`menu-item ${openMenuIndex === 2 ? "open" : ""} ${
                activeMenuIndex === 2 ? "active" : ""
              }`}
              onClick={() => handlesubmenuclick(2, "/admin/trends")}
            >
              <div className="menu-link menu-i">
                <i className="fa-solid fa-users menu-icon" />
                {isOpen && <span className="menu-text" onClick={toggleSidebar}>Trends & History</span>}
              </div>
            </li>
         
          {/* Generate Bill */}
          
            <li
              className={`menu-item ${openMenuIndex === 3 ? "open" : ""} ${
                activeMenuIndex === 3 ? "active" : ""
              }`}
              onClick={() => handlesubmenuclick(3, "/admin/issues")}
            >
              <div className="menu-link menu-i">
                <i className="fa-solid fa-calendar-days menu-icon" />
                {isOpen && <span className="menu-text" onClick={toggleSidebar}>Issues to Review</span>}
              </div>
            </li>
        

          {/* {userRole === "customer" && (
            <li
              className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${
                activeMenuIndex === 5 ? "active" : ""
              }`}
              onClick={() => handlesubmenuclick(5, "/customer/billPayment")}
            >
              <div className="menu-link menu-i">
                <i className="fa-solid fa-house-medical menu-icon" />
                {isOpen && <span className="menu-text"onClick={toggleSidebar}>Settings</span>}
              </div>
            </li>
          )} */}
          {/* Settings */}

         
            <li
              className={`menu-item ${openMenuIndex === 5 ? "open" : ""} ${
                activeMenuIndex === 5 ? "active" : ""
              }`}
              onClick={() => handlesubmenuclick(5, "/admin/settings")}
            >
              <div className="menu-link menu-i">
                <i className="fa-solid fa-file-medical menu-icon" />
                {isOpen && <span className="menu-text" onClick={toggleSidebar}>Settings</span>}
              </div>
            </li>
        
         <li
              className={`menu-item ${openMenuIndex === 6 ? "open" : ""} ${
                activeMenuIndex === 6 ? "active" : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/")}
            >
              <div className="menu-link menu-i">
              <RiLogoutBoxRFill />
                {isOpen && <span className="menu-text ms-3  " onClick={toggleSidebar}>Logout</span>}
              </div>
            </li>
          {/* <li className="menu-item" onClick={handleLogout}>
            <div className="menu-link menu-i">
              <i className="fa-solid fa-right-from-bracket menu-icon" />
              {isOpen && <span className="menu-text">Logout</span>}
            </div>
          </li> */}
          {/* Profile */}
          {/* <li
            className={`menu-item ${openMenuIndex === 4 ? "open" : ""} ${
              activeMenuIndex === 4 ? "active" : ""
            }`}
            onClick={() =>
              handlesubmenuclick(
                4,
                userRole === "admin" ? "/admin/profile" : "/customer/profile"
              )
            }
          >
            <div className="menu-link menu-i">
              <i className="fa-solid fa-circle-user menu-icon"></i>
              {isOpen && <span className="menu-text" onClick={toggleSidebar}>Logout</span>}
            </div>
          </li> */}
          {/* Bill Payment (Customer Only) */}
        </ul>

         
<div className="dashboard-plan p-3 rounded  mb-3  " style={{marginTop:"170px"}}>
  <div className="row align-items-center mb-2">
    <div className="col-7  col-md-8">
      <span className="dashboard-plan-label  me-2  text-dark"></span>
    </div>
    <div className="col-5 col-md-4 text-end">
      <span className="dashboard-plan-badge  badge bg-primary">Basic</span>
    </div>
  </div>
  <div className="progress mb-2" style={{ height: "6px" }}>
    <div
      className="progress-bar"
      role="progressbar"
      style={{ width: "40%", backgroundColor: "#2d5be3" }}
      aria-valuenow="40"
      aria-valuemin="0"
      aria-valuemax="100"
    ></div>
  </div>
  <button className="btn btn-outline-primary w-100 dashboard-upgrade-btn mt-2 ">
        <li   style={{listStyle: "none"}}
              className={` ${openMenuIndex === 6 ? "open" : ""} ${
                activeMenuIndex === 6 ? "active" : ""
              }`}
              onClick={() => handlesubmenuclick(6, "/admin/upgrade")}
            >
              <MdOutlineUpgrade  className="text-dark"/>
              <div className="menu-link menu-i">
          
                {isOpen && <span className="menu-text" onClick={toggleSidebar}>Upgrade Plan</span>}
              </div>
            </li>
  </button>
</div>

      </div>
    </>
  );
};

export default Sidebar;
