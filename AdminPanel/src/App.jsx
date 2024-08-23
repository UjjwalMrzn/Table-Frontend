import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect, useLocation } from 'wouter';
import { BrowserRouter } from 'react-router-dom';
import User from './user';
import User2 from './user2';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Details from './Details';
import Login from './Login';
import Register from './Register';
import video from './video';
import start from './start';
import addTable from './addTable'
import Dashboard from './Dashboard';
import Booknow from './BookNow';
import EditTable from './EditTable';
import PayNow from './PayNow';
import  Bill from './Bill';
import AccessPage from './AccessPage';
// import TimeBill from './TimeBill';
// import Details2 from './Details2';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [location] = useLocation(); // Get the current path

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 993) {
        setOpenSidebarToggle(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

   // Define routes where the Sidebar and Header should not be displayed
     // Determine if Sidebar and Header should be hidden
   const hideSidebarAndHeader =
   location === '/login' || location === '/register' || location === '/accesspage';   
  return (
    <div className={`grid-container ${hideSidebarAndHeader ? 'no-sidebar-no-header' : ''}`}>
      {/* Render Header only when not hidden */}
      {!hideSidebarAndHeader && (location === '/' || location === '/dashboard') && (
        <Header OpenSidebar={OpenSidebar} />
      )}
      
      {/* Render Sidebar only when not hidden */}
      {!hideSidebarAndHeader && (
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      )}


      <main className='main-container'>
        <BrowserRouter>
          <Route path="/" component={Dashboard} />
          <Route path="/user/:id" component={User} />
          <Route path="/user2/:id" component={User2} />

          <Route path="/details/:id" component={Details} />
          {/* <Route path="/details2/:id" component={Details2} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/video/:id" component={video} />
          <Route path="/start/:id/:id1" component={start} />
          <Route path="/addtable" component={addTable} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/BookNow/:id" component={Booknow} />
          <Route path="/edittable/:id" component={EditTable} />
          <Route path="/PayNow/:id" component={PayNow} />
          <Route path="/bill/:id" component={Bill} />
          <Route path="/accesspage" component={AccessPage} />
          {/* <Route path="/TimeBill/:id" component={TimeBill} /> */}

        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
