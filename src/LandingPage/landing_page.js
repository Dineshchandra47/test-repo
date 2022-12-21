import React from "react";
import { Link } from "react-router-dom";
import "./landing_page.css";

function LandingPage() {
  return (
    <div className="LandingPage-container">
      <div>
        <img src="./assets/Landing_page.jpg" />
      </div>
      <div>
        <h2>10x Team</h2>
        <Link to="/postview">
          <button className="enter-btn">Enter</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
