import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ toggleSidebar }) => {
  return (
<>
<nav className="navbar justify-content-between">
      {/* title */}
      <h4 className="navbar-title animate-charcter " style={{ marginTop: "5px", marginLeft: "50px",fontFamily:" ui-monospace",fontSize:"30px", fontWeight:"500", color:"blue" }}> </h4>
       {/* Logo */}
        <span className="navbar-brand fw-bold custom-logo ms-5   text-primary">
          Logo
        </span>

      <button onClick={toggleSidebar} className="toggle-button me-auto" style={{ marginLeft: "60px",width: "auto", }}>
        ☰
      </button>


      {/* <div className="nav-notification-icon">
      <i class="fa-solid fa-bell"></i>
      </div> */}



            <div className="position-relative me-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              className="custom-bell text-dark"
            >
              <path
                d="M12 22c1.1 0 2-.9 2-2h-4a2 2 0 002 2zm6-6V11c0-3.07-1.63-5.64-4.5-6.32V4a1.5 1.5 0 10-3 0v.68C7.63 5.36 6 7.92 6 11v5l-1.29 1.29A1 1 0 006 19h12a1 1 0 00.71-1.71L18 16z"
                fill="currentColor"
              />
            </svg>
            <span className="position-absolute top-0  text-danger   start-100 translate-middle badge rounded-pill custom-badge">
              3
            </span>
          </div>

      <div className="dropdown profile-elemen" style={{ marginRight: "40px" }}>
        
        <div className="me-2 fw-bold p-1 rounded-4 profile d-flex align-items-center"
          style={{ cursor: "pointer" }}
          data-bs-toggle="dropdown" aria-expanded="false">

          <div className="profile-element">
            <div className="avatar-online">
              <img style={{ width: "40px", borderRadius: "50%" }}
                src="https://i.ibb.co/6Jc9g6jF/user-11.jpg"
                alt="profile" />
              <span className="text-dark ms-2">Adela Parkson</span>
            </div>
          </div>
        </div>
        <ul className="dropdown-menu dropdown-menu-end">
          {/* <li>
            <Link className="dropdown-item" to="/adminprofile">
              My Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/">
              Update Profile
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="/changepassword">
              Change Password
            </Link>
          </li> 
           <li>
            <hr className="dropdown-divider" />
          </li> */}
          <li>
            <Link className="dropdown-item" to="/">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </nav>
</>
  )
}

export default Navbar