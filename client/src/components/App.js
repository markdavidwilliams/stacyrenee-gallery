// dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Nav from './Nav/Nav';
import Gallery from './Gallery/Gallery';

// styles
import './App.css';

const App = () => {
  return (
    <Router>
      <div className = 'App'>
        <Route path = '/' component = { Nav } />
        <Route path = '/gallery' component = { Gallery } />
      </div>
    </Router>
  )
}

export default App;
