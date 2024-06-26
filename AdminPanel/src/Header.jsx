import React from 'react';


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
            <input type="text" placeholder="Enter Table Number" />
            <button className="add-btn">Add Table</button>
          </div>
        </div>
  );
}

export default Header;
