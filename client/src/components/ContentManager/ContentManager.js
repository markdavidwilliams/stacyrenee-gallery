import React, { Component } from 'react'

import Login from './Login/Login'

import './ContentManager.css'

class ContentManager extends Component {
  state = {
    component: null
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (!token) {
      this.setState({ component: <Login /> })
    } else {
      this.setState({ component: <p>Success</p> })
    }
  }

  render() {
    return (
      <div className="cms-container">
       {this.state.component}
      </div>
    )
  }
}

export default ContentManager