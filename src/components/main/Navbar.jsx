import React from 'react';
import { Link } from 'react-router-dom';
import CompanyLogo from '/images/company-logo.png';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
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
              <ul className="p-2 bg-base-100">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-55 p-2 shadow text-black"
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
