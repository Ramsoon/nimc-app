import { Link } from "react-router-dom";
import "./header.css";
import { useAuth } from "../../context/AuthContext";

export default function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <Link to="/" className="logo">
        NIMC APP
      </Link>
      <nav className="nav">
        <Link to="/" className="nav-link">
          Home
        </Link>

        {user ? (
          <>
            <Link to="/profile" className="nav-link">
              Profile
            </Link>
            <Link to="/dataCollection" className="nav-link">
              Data Collection
            </Link>
            <button onClick={logout} className=" logout-btn">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
