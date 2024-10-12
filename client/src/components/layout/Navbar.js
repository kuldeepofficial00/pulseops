import React from 'react';

const Navbar = ({ activeOrg = 'Main Operations' }) => (
  <nav className="pulse-navbar">
    <div className="brand">Pulse<strong>Ops</strong></div>
    <div className="org-badge">{activeOrg}</div>
  </nav>
);

export default Navbar;
