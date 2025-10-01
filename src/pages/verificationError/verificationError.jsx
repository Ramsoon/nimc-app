import { XCircle, RefreshCw } from "lucide-react";
import { useLocation } from "wouter";
import "./verificationError.css"; // import external stylesheet

export default function Error() {
  const [, setLocation] = useLocation();

  return (
    <div className="error-container">
      {/* Animated background orbs */}
      <div className="error-orbs">
        <div className="orb orb-top" />
        <div className="orb orb-bottom" />
      </div>

      <div className="error-card-wrapper">
        <div className="error-card">
          {/* Error icon */}
          <div className="icon-wrapper">
            <div className="icon-bg" />
            <div className="icon-main">
              <XCircle className="icon" />
            </div>
          </div>

          {/* Title */}
          <h1 className="error-title">Verification Failed</h1>

          <div className="divider" />

          <p className="error-message">
            We couldn't verify your details. Please check your information and
            try again.
          </p>

          {/* Retry button */}
          <button
            onClick={() => setLocation("/")}
            data-testid="button-retry"
            className="retry-button"
          >
            <RefreshCw className="retry-icon" />
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
