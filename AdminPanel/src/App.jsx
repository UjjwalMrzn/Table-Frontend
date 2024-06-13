import { useState } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'wouter';
import User from './User';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Details from './Details';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
    
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/user/:id" component={User} />
          <Route path="/details/:id" component={Details} />
          <Redirect from="/" to="/home" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
