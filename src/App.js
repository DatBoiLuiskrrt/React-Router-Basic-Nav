import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Router, Route} from 'react-router-dom';

const App = () => (
  <>
 
    <Navigation />
 
  <Route exact path="/">
    <Home/>
  </Route>
  <Route exact path="/about">
    <About/>
  </Route>
  <Route exact path="/contact">
    <Contact/>
  </Route>
  </>
);

export default App;
