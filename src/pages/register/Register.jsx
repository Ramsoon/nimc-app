import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";
import { registerUser } from "../../api/auth";
import { toast } from "react-toastify";

export default function Register() {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    displayName: "",
    emailAddress: "",
    mobileNumber: "",
    password: "",
    confirmPassword: "",
    countryCode: "+1",
    provider: "EMAIL",
    providerId: null,
    referralCode: null,
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await registerUser(formData);
      console.log("Register success:", data);

      toast.success("Account created successfully!");

      // redirect after short delay
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error(err);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      
      <div className="overlay" />

      <div className="register-card">
        <h2 className="register-title">Create Account</h2>
        <form onSubmit={handleSubmit} className="register-form">
          
          <div className="form-group">
            <input
              type="text"
              id="FirstName"
              name="FirstName"
              value={formData.FirstName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="FirstName">First Name</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="LastName"
              name="LastName"
              value={formData.LastName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="LastName">Last Name</label>
          </div>

          <div className="form-group">
            <input
              type="text"
              id="displayName"
              name="displayName"
              value={formData.displayName}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="displayName">Display Name</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              id="emailAddress"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="emailAddress">Email</label>
          </div>

          <div className="phone-row">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
            >
              <option value="+1">+1 (US)</option>
              <option value="+44">+44 (UK)</option>
              <option value="+234">+234 (NG)</option>
              <option value="+91">+91 (IN)</option>
            </select>
            <input
              type="text"
              id="mobileNumber"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="password">Password</label>
          </div>

          <div className="form-group">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder=" "
            />
            <label htmlFor="confirmPassword">Confirm Password</label>
          </div>

          <button type="submit" className="register-button" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <p className="register-footer">
          Already have an account?{" "}
          {loading? 'Sign in' : <Link to="/login" className="register-link">
            Sign in
          </Link>}
        </p>
      </div>
    </div>
  );
}