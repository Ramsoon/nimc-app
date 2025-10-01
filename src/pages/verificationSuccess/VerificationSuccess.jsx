import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./VerificationSuccess.css";

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // If no data from location.state, use dummy test data
  const data =
    location.state || {
      fullName: "John Doe",
      nin: "1234-5678-9012",
      dob: "1995-08-15",
      phone: "+234 812 345 6789",
    };

  return (
    <div className="success-page">
      <div className="success-card">
        <h2>✅ Verification Successful</h2>
        <p>Your details have been verified successfully.</p>

        <div className="verified-data">
          <p>
            <strong>Full Name:</strong> {data.fullName}
          </p>
          <p>
            <strong>NIN:</strong> {data.nin}
          </p>
          <p>
            <strong>Date of Birth:</strong> {data.dob}
          </p>
          <p>
            <strong>Phone:</strong> {data.phone}
          </p>
        </div>

        <button onClick={() => navigate("/dataCollection")}>Go Back</button>
      </div>
    </div>
  );
};

export default SuccessPage;
