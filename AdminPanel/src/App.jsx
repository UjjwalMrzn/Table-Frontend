import { useState } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import User from './User';

import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
// import User from './User';
import { Route } from 'wouter';
import screen from './screen'
import test from './test'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle ] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
    
      <main>
        <BrowserRouter>
          <Route path="/home" component={Home}/>
          <Route path="/test" component={test}/>

          <Route path="/User" component={User}/>
          <Route path="/screens" component={screen}/>

        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;