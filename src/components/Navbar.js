import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-600 p-4 text-white flex justify-between">
      <div className="font-bold">OneClickSite</div>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/form">Create</Link>
        <Link to="/preview">Preview</Link>
      </div>
    </nav>
  );
}

export default Navbar;
