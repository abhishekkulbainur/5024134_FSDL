import React from 'react';
import { getGreeting } from '../utils/helpers';

function Navbar({ totalStudents, activeCount }) {
  const greeting = getGreeting('Student');

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">🎓</span>
        <div>
          <h1 className="navbar-title">StudentHub</h1>
          <p className="navbar-sub">{greeting}</p>
        </div>
      </div>
      <div className="navbar-stats">
        {totalStudents > 0 && (
          <>
            <div className="stat">
              <span className="stat-num">{totalStudents}</span>
              <span className="stat-label">Total</span>
            </div>
            <div className="stat">
              <span className="stat-num">{activeCount}</span>
              <span className="stat-label">Active</span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
