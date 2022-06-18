import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar';
import { useState } from 'react';
import { Sidenav } from './Components/sidenav';
import { Sidestil } from './Components/sidestill';
import { Home } from './Pages/Home';
import { Allroutes } from './Components/Allroutex';

function App() {


  return (
    <div className="App"  >
         <Allroutes/>
    </div>
  );
}

export default App;
