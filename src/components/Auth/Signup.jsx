import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }
    if (!agreeTerms) {
      alert("You must agree to the terms and conditions");
      return;
    }
    // Here you would typically send the data to your backend
    alert("Signup successful!");
    navigate("/dashboard");
  };

  return (
    <>
      <div className="container-fluid vh-100 d-flex align-items-center justify-content-center">
        <div className="row w-100">
          {/* Left Side - Form */}
          <div className="col-lg-6 col-md-8 col-sm-10 mx-auto bg-white p-5 rounded shadow">
            <h2 className="fw-bold mb-3 text-center">Sign Up</h2>
            <p className="text-muted mb-4 text-center">
              Create your account to get started!
            </p>

            <form onSubmit={handleSignup} className="w-100" style={{ maxWidth: "350px", margin: "0 auto" }}>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label">First Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="John"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                  />
                </div>
                <div className="col">
                  <label className="form-label">Last Name*</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Doe"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                  />
                </div>
              </div>

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

              <div className="mb-3 text-start">
                <label className="form-label">Password*</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Min. 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength="8"
                  />
                  <span className="input-group-text bg-white" onClick={() => setShowPassword(!showPassword)}>
                    <i className={`bi bi-eye${showPassword ? "" : "-slash"}`} />
                  </span>
                </div>
              </div>

              <div className="mb-3 text-start">
                <label className="form-label">Confirm Password*</label>
                <div className="input-group">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Confirm your password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength="8"
                  />
                  <span className="input-group-text bg-white" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                    <i className={`bi bi-eye${showConfirmPassword ? "" : "-slash"}`} />
                  </span>
                </div>
              </div>

              <div className="form-check mb-3 text-start">
                <input 
                  className="form-check-input" 
                  type="checkbox" 
                  id="agreeTerms" 
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="agreeTerms">
                  I agree to the <a href="#" className="text-primary">Terms and Conditions</a>
                </label>
              </div>

              <button type="submit" className="btn btn-primary w-100 fw-bold mb-3">
                Sign Up
              </button>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <Link to="/" className="text-primary">
                  Log in
                </Link>
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

export default Signup;