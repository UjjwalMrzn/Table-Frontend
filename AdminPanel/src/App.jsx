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
// import PayNow from './PayNow';

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

  return (
    <div className='grid-container'>
      {/* Render Header only when on the dashboard */}
      {location === '/' || location === '/dashboard' ? <Header OpenSidebar={OpenSidebar} /> : null}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className='main-container'>
        <BrowserRouter>
          <Route path="/" component={Dashboard} />
          <Route path="/user/:id" component={User} />
          <Route path="/user2/:id" component={User2} />

          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/video/:id" component={video} />
          <Route path="/start/:id/:id1" component={start} />
          <Route path="/addtable" component={addTable} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/BookNow/:id" component={Booknow} />
          {/* <Route path="/PayNow/:id" component={PayNow} /> */}

        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
