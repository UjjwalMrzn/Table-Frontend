import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import { GiBallPyramid } from 'react-icons/gi';
import { Link } from 'wouter';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? 'sidebar-responsive' : ''}>
   <div className='sidebar-title'>
      <div className='sidebar-brand'>
        <img src="/snooker-logo.png" alt="Snooker Logo" className="logo-image" />
      </div>
      <span className='icon close_icon' onClick={OpenSidebar}>X</span>
    </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <Link to="/" className="sidebar-link">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </Link>
        </li>
        <li className='sidebar-list-item'>
          <Link to="/settings" className="sidebar-link">
            <BsFillGearFill className='icon' /> Settings
          </Link>
        </li>
      </ul>
      
    </aside>
  );
}

export default Sidebar;
