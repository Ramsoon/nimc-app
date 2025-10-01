import { useState } from "react";
import "./home.css";

export default function Home() {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", query);
    // Implement search functionality here

  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to MyApp</h1>
          <p className="hero-subtitle">
            Find exactly what you’re looking for. Start your journey below.
          </p>

          <form className="search-bar" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search anything..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
          </form>
        </div>
      </section>
    </div>
  );
}
