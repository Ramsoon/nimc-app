import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import DataCollection from "./pages/dataCollection/DataCollection";
import PrivateRoute from "./components/privateRouteWrapper/PrivateRoute";
import ErrorPage from "./pages/verificationError/verificationError";
import SuccessPage from "./pages/verificationSuccess/SuccessPage";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Protected routes */}
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/dataCollection"
          element={
            <PrivateRoute>
              <DataCollection />
            </PrivateRoute>
          }
        />
            
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>

      {/* Toast container available app-wide */}
      <ToastContainer position="top-right" autoClose={3000} />
    </Router>
  );
}
