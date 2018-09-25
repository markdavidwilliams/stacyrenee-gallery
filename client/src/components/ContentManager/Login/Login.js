import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './Login.css'

class Login extends Component {

  setToken = event => {
    event.preventDefault()
    localStorage.setItem('token', 'token')
    window.location.pathname = window.location.pathname
  }

  render() {
    return (
      <div className='login-wrapper'>
        <div className='login-modal'>
          <h1>IDENTIFY YOURSELF</h1>
          <p>verify credentials</p>
          <form>
            <input type="text" placeholder="USERNAME" name="username" />
            <input type="password" placeholder="PASSWORD" name="password" />
            <button type="submit" onClick={this.setToken}>ENTER</button>
          </form>
        </div>
        <Link to="/">
          <p>leave this place!</p>
        </Link>
      </div>
    ) 
  }
}

export default Login