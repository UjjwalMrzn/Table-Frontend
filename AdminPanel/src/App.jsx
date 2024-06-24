import React, { useState, useEffect } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'wouter';
import { BrowserRouter } from 'react-router-dom';
import User from './User';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Details from './Details';
import Login from './Login';
import Register from './Register';
import video from './Video';
import Dashboard from './Dashboard';




function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

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
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />

      <main className='main-container'>
        <BrowserRouter>
          <Route path="/" component={Home} />
          <Route path="/User/:id" component={User} />
          <Route path="/details/:id" component={Details} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Video/:id" component={video} />
          <Route path="/Dashboard" component={Dashboard} />

        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
