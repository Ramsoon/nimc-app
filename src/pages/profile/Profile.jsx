import "./profile.css";
import { useAuth } from "../../context/AuthContext";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) {
    return (
      <div className="profile-container">
        <div className="overlay" />
        <div className="profile-card empty-card">
          <h2>No Profile Data</h2>
          <p>Please log in to view your profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="overlay" />

      <div className="profile-card">
        <div className="profile-header">
          <img
            src={user.profilePicture || "images/avatar.png"}
            alt="Profile Avatar"
            className="profile-photo"
          />
          <div className="profile-basic">
            <h2>{user.username}</h2>
            <p><strong>Status:</strong> {user.userStatus?.status || "Unknown"}</p>
          </div>
        </div>

        <div className="profile-details">
          <h3>Account Information</h3>
          <div className="detail-item"><span>Email:</span> {user.emailAddress}</div>
          <div className="detail-item"><span>Phone:</span> {user.countryCode} {user.mobileNumber}</div>
          <div className="detail-item"><span>First Name:</span> {user.firstName || "—"}</div>
          <div className="detail-item"><span>Last Name:</span> {user.lastName || "—"}</div>
          <div className="detail-item"><span>Timezone:</span> {user.timezone}</div>
          <div className="detail-item"><span>Biometrics Enabled:</span> {user.biometrics ? "Yes" : "No"}</div>
        </div>

        <div className="profile-actions">
          <button className="btn update">Update Info</button>
          <button className="btn logout" onClick={logout}>Logout</button>
        </div>
      </div>
    </div>
  );
}