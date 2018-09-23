// dependencies
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Nav from './Nav/Nav';
import Gallery from './Gallery/Gallery';
import ContentManager from './ContentManager/ContentManager'

const App = () => {
  return (
    <Router>
      <div className = 'App'>
        <Route path = '/' component = { Nav } />
        <Route path = '/gallery' component = { Gallery } />
        <Route path = '/mold/cms' component = { ContentManager } />
      </div>
    </Router>
  )
}

export default App;
