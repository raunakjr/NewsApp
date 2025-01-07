import React from "react";

export default function Navbar({ setCategory }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          NewsApp
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#world"
                onClick={() => setCategory("sports")}
              >
                Sports
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#technology"
                onClick={() => setCategory("technology")}
              >
                Technology
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#health"
                onClick={() => setCategory("health")}
              >
                Health
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#entertainment"
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
