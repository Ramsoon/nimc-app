import { CheckCircle2, ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import "./VerificationSuccess.css"; // external CSS

export default function Success() {
  const [, setLocation] = useLocation();

  return (
    <div className="success-page">
      {/* Animated background orbs */}
      <div className="background-orbs">
        <div className="orb orb-top" />
        <div className="orb orb-bottom" />
      </div>

      <div className="success-card-wrapper">
        <div className="success-card">
          {/* Success icon */}
          <div className="success-icon-wrapper">
            <div className="success-icon-bg" />
            <div className="success-icon">
              <CheckCircle2 className="icon" />
            </div>
          </div>

          {/* Title */}
          <h1 className="success-title">Verification Successful!</h1>

          <div className="divider">
            <div className="divider-bar" />
          </div>

          <p className="success-text">
            Your details have been successfully verified. You can now proceed to the next step.
          </p>

          {/* Action button */}
          <button
            onClick={() => setLocation("/")}
            data-testid="button-back"
            className="success-btn"
          >
            Back to Home
            <ArrowRight className="btn-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}
