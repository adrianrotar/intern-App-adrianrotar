import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import logo from '../../assets/images/logo.webp';
import '../../App.scss';

const Layout = () => (
  <div className="layout-container">
    <header className="header">
      <img alt="Company Logo" className="logo" src={logo} />
      <nav>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              to="/users"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
    <footer className="footer">
      &copy;
      {' '}
      {new Date().getFullYear()}
      {' '}
      tec:agency. All rights reserved.
    </footer>
  </div>
);

export default Layout;
