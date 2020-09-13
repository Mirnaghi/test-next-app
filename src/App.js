import React from 'react';
import './App.css';
import MenuBar from './components/MenuBar/MenuBar';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from '../src/pages/Home/Home';
import About from '../src/pages/About/About';
import HowWorks from './pages/HowWork/HowWork';
import Specialties from '../src/pages/Specialties/Specialties';
import Wishes from '../src/pages/Wishes/Wishes';


function App() {
  return (
    <div>
      <BrowserRouter>
        <MenuBar />
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/how-works' component={HowWorks}/>
        <Route path='/specialties' component={Specialties}/>
        <Route path='/wishes' component={Wishes}/>
      </BrowserRouter>
    </div>
  );
}

export default App;

