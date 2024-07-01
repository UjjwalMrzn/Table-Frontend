import React from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs';
import { GiBallPyramid } from 'react-icons/gi';

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
          <a href="/" className="sidebar-link">
            <BsGrid1X2Fill className='icon' /> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/settings" className="sidebar-link">
            <BsFillGearFill className='icon' /> Settings
          </a>
        </li>
      </ul>
      
    </aside>
  );
}

export default Sidebar;
