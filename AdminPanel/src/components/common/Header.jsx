import React from 'react';
import { Link } from 'wouter'

function Header({ OpenSidebar }) {
  return (
    <div className="header1">
      <div className="header-left">
    {/* Left content of the header */}
  </div>
  {/* <div className='back-btn-header'>
    <button>&#171; Back</button>
  </div> */}
          <div className="search-add">
            <input type="text" placeholder="Search Table" />
            <Link to={'/addtable'}>
            <button className="add-btn">Add Table</button>
            </Link>
          </div>
        </div>
  );
}

export default Header;
