import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './CmsNav.css'

class CmsNav extends Component {

  logout() {
    localStorage.removeItem('token')
    window.location.pathname = window.location.pathname
  }

  render() {
    return (
      <div className='cms-nav-container'>
        <Link to='/renovate/cms'>
          <p>home</p>
        </Link>
        <Link to='/'>
          <p onClick={this.logout}>logout</p>
        </Link>
      </div>
    )
  }
}

export default CmsNav