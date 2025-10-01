import { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ use react-router navigation
import { Shield, Lock, CheckCircle2 } from "lucide-react";
import "./DataCollection.css";

export default function DataCollection() {
  const [formData, setFormData] = useState({
    fullName: "",
    nin: "",
    dob: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // ✅ navigation hook

  // Dummy verification data
  const dummyData = {
    fullName: "user",
    nin: "12345678",
    dob: "1999-01-01",
    phone: "080",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const isValid =
        formData.fullName === dummyData.fullName &&
        formData.nin === dummyData.nin &&
        formData.dob === dummyData.dob &&
        formData.phone === dummyData.phone;

      // ✅ Navigate to success or error page
      navigate(isValid ? "/success" : "/error");

      setLoading(false);
    }, 2000);
  };

  return (
    <div className="data-page">
      {/* Background orbs */}
      <div className="background-orbs">
        <div className="orb orb-top" />
        <div className="orb orb-bottom" />
        <div className="orb orb-center" />
      </div>

      {/* Pattern overlay */}
      <div className="pattern-overlay" />

      {/* Main card */}
      <div className="form-wrapper">
        <div className="form-card">
          {/* Corner accent */}
          <div className="corner-accent" />

          {/* Badge */}
          <div className="security-badge">
            <Shield className="badge-icon" />
            <span>Secure Verification</span>
          </div>

          {/* Title */}
          <div className="form-title">
            <h1>NIMC Data Collection</h1>
            <div className="divider">
              <div className="divider-bar" />
            </div>
            <p>Fill in your details for verification</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="form-fields">
            {/* Full Name */}
            <div className="input-group">
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Full Name</label>
            </div>

            {/* NIN */}
            <div className="input-group">
              <input
                type="text"
                name="nin"
                value={formData.nin}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>NIN</label>
            </div>

            {/* DOB */}
            <div className="input-group">
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Date of Birth</label>
            </div>

            {/* Phone */}
            <div className="input-group">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder=" "
              />
              <label>Phone Number</label>
            </div>

            {/* Submit Button */}
            <button type="submit" disabled={loading} className="submit-btn">
              {loading && <div className="shimmer-overlay" />}
              <span className="btn-content">
                {loading ? (
                  <>
                    <div className="spinner" />
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="btn-icon" />
                    Verify & Continue
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Security footer */}
          <div className="form-footer">
            <Lock className="footer-icon" />
            <span>256-bit Encryption</span>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="progress-indicator" />
      </div>
    </div>
  );
}
