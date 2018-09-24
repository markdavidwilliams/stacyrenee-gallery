import React, { Component, Fragment } from 'react'

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
      return
    }
  }

  render() {
    return (
      <Fragment>
       {this.state.component}
      </Fragment>
    )
  }
}

export default ContentManager