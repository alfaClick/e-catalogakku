import React from 'react'
import CompanyLogo from '../../assets/images/company-logo.png'

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed top-0 z-10">
      <div className="navbar-start">
        <a className="text-xl cursor-pointer">
          <img src={CompanyLogo} alt="Logo" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <details>
              <summary>Products</summary>
              <ul className="p-2 bg-base-100">
                <li>
                  <a href="/product/industry">Industry</a>
                </li>
                <li>
                  <a href="#">Four Wheels</a>
                </li>
                <li>
                  <a href="/product/two-wheels">Two Wheels</a>
                </li>
                <li>
                  <a href="/product/truck-and-heavy-equipment">
                    Truck And Heavy Equipment
                  </a>
                </li>
                <li>
                  <a href="/product/export">Export</a>
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a>Products</a>
              <ul className="p-2">
                <li>
                  <a href="/product/industry">Industry</a>
                </li>
                <li>
                  <a href="#">Four Wheels</a>
                </li>
                <li>
                  <a href="/product/two-wheels">Two Wheels</a>
                </li>
                <li>
                  <a href="/product/truck-and-heavy-equipment">
                    Truck And Heavy Equipment
                  </a>
                </li>
                <li>
                  <a href="/product/export">Export</a>
                </li>
              </ul>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
