import React, { Component } from 'react'

import './Login.css'

class Login extends Component {

  setToken = event => {
    event.preventDefault()
    localStorage.setItem('token', 'token')
    window.location.pathname = '/renovate/cms'
  }

  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-modal'>
          <h1>IDENTIFY YOURSELF</h1>
          <p>verify credentials</p>
          <form>
            <input type="text" placeholder="Username" name="username" />
            <input type="password" placeholder="Password" name="password" />
            <button type="submit" onClick={this.setToken}>Enter</button>
          </form>
        </div>
      </div>
    ) 
  }
}

export default Login