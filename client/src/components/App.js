// dependencies
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Nav from './Nav/Nav';
import Gallery from './Gallery/Gallery';
import ContentManager from './ContentManager/ContentManager'
import CmsNav from './ContentManager/CmsNav/CmsNav'
import CmsGallery from './ContentManager/CmsGallery/CmsGallery'

class App extends Component {
  state = {
    routes: null
  }

  routeKey() {
    return Math.floor(Math.random() * Math.floor(999999))
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    if (!token) {
      const routes = [
        <Route key={this.routeKey()} path = '/' component = { Nav } />,
        <Route key={this.routeKey()} path = '/gallery' component = { Gallery } />,
        <Route key={this.routeKey()} path = '/renovate/cms' component = { ContentManager } />
      ]
      this.setState({ routes })
    } else {
      const routes = [
        <Route key={this.routeKey()} path = '/' component = { Nav } />,
        <Route key={this.routeKey()} path='/' component={ CmsNav } />,
        <Route key={this.routeKey()} path = '/gallery' component = { Gallery } />,
        <Route key={this.routeKey()} exact path = '/renovate/cms' component = { ContentManager } />,
        <Route key={this.routeKey()} path = '/renovate/cms/gallery' component = { CmsGallery } />
      ]
      this.setState({ routes })
    }
  }

  render() {
    return (
      <Router>
        <div className = 'App'>
          {!this.state.routes ? (
            <p>loading</p>
          ) : (
            <Fragment>
              {this.state.routes}
            </Fragment>
          )}
        </div>
      </Router>
    )
  }
}

export default App;
