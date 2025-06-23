import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  // Dummy credentials for different roles
  const roleCredentials = {
   
  };

  // Handle role selection and fill dummy credentials
  const handleRoleSelect = (role) => {
    const credentials = roleCredentials[role];
    setEmail(credentials.email);
    setPassword(credentials.password);
    setSelectedRole(role);
  };

  // Handle login and save role to localStorage
  const handleLogin = (e) => {
    e.preventDefault();
    if (selectedRole) {
      localStorage.setItem("userRole", selectedRole);
      alert(`Logged in as ${selectedRole}`);
      if (selectedRole === "admin") {
        navigate("/admin/dashboard"); // Redirect to admin dashboard
      }
    } else {
      alert("Please select a role before logging in.");
    }
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Left Side - Form */}
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto bg-white p-5 rounded shadow">
            <h2 className="fw-bold mb-3 text-center">Login</h2>
            <p className="text-muted mb-4 text-center">
              Enter your email and password to log in!
            </p>

            <form onSubmit={handleLogin} className="w-100" style={{ maxWidth: "350px", margin: "0 auto" }}>
              <div className="mb-3 text-start">
                <label className="form-label">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="mail@simmmpplle.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2 text-start">
                <label className="form-label">Password*</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Min. 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span className="input-group-text bg-white" onClick={() => setShowPassword(!showPassword)}>
                    <i className={`bi bi-eye${showPassword ? "" : "-slash"}`} />
                  </span>
                </div>
              </div>

              <div className="text-end mb-3">
                <a href="#" className="small text-primary">
                  Forget password?
                </a>
              </div>

              <div className="form-check mb-3 text-start">
                <input className="form-check-input" type="checkbox" id="remember" defaultChecked />
                <label className="form-check-label" htmlFor="remember">
                  Keep me logged in
                </label>
              </div>


<Link to="/dashboard" className="btn  w-100 mb-3 fw-bold">
              <button type="submit" className="btn btn-primary w-100 fw-bold">
                Login
              </button>
              </Link>

              {/* <div className="d-flex justify-content-center mt-3">
                <button className="btn btn-info me-2" onClick={() => handleRoleSelect("admin")}>
                  Admin
                </button>
                <button className="btn btn-secondary" onClick={() => handleRoleSelect("customer")}>
                  Customer
                </button>
              </div> */}

              <p className="text-center mt-3">
                Already registered?{" "}
                <a href="/signup" className="text-primary">
                  Sign up
                </a>
              </p>
            </form>

            <footer className="mt-5 text-muted small text-center">
              © 2025 Reputation. All Rights Reserved. Made with love by Simmmple!
            </footer>
          </div>

          {/* Right Side - Branding */}
          <div
            className="col-lg-6 d-none d-lg-flex flex-column justify-content-center align-items-center text-white"
            style={{
              background: "linear-gradient(180deg, #9d9cfb 0%, #4700ff 100%)",
              borderTopLeftRadius: "100px",
            }}
          >
            {/* Placeholder for logo/icon */}
            <div
              className="mb-4"
              style={{
                width: "80px",
                height: "100px",
                backgroundColor: "#3498ff",
                borderRadius: "10px",
              }}
            ></div>
            <h1 className="fw-bold">REPUTATION.</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
