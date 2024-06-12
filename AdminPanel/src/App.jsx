import { useState } from 'react';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import User from './User';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import { Route, Switch } from 'wouter';

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
        <Switch>
          <Route path="/home" component={Home}/>

          <Route path="/User" component={User}/>
        </Switch>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;