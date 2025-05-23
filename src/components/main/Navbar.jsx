import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '/images/company-logo.png'; // pakai path versi fitur-baru

function Navbar() {
  // Initialize theme state from localStorage or default to 'light'
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  // Apply theme when component mounts and when theme changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
      document.documentElement.setAttribute('data-theme', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [theme]);

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'} shadow-sm fixed top-0 z-10`}>
      <div className="navbar-start">
        <Link to="/" className="text-xl cursor-pointer">
          <img src={CompanyLogo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="#about">About</a> {/* ini tetap <a> karena anchor scroll */}
          </li>
          <li>
            <details>
              <summary>Products</summary>
              <ul className={`p-2 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'}`}>
                <li>
                  <Link to="/product/industry">Industry</Link>
                </li>
                <li>
                  <Link to="/product/four-wheels">Four Wheels</Link>
                </li>
                <li>
                  <Link to="/product/two-wheels">Two Wheels</Link>
                </li>
                <li>
                  <Link to="/product/truck-and-heavy-equipment">
                    Truck And Heavy Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/product/export">Export</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* Theme toggle button */}
        <button 
          onClick={toggleTheme} 
          className="btn btn-ghost btn-circle mr-2"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        >
          {theme === 'light' ? (
            // Sun icon for light mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${
              theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-base-100 text-black'
            }`}
          >
            <li>
              <a href="#about">About</a> {/* tetap pakai <a> */}
            </li>
            <li>
              <span>Products</span>
              <ul className="p-2">
                <li>
                  <Link to="/product/industry">Industry</Link>
                </li>
                <li>
                  <Link to="/product/four-wheels">Four Wheels</Link>
                </li>
                <li>
                  <Link to="/product/two-wheels">Two Wheels</Link>
                </li>
                <li>
                  <Link to="/product/truck-and-heavy-equipment">
                    Truck And Heavy Equipment
                  </Link>
                </li>
                <li>
                  <Link to="/product/export">Export</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

