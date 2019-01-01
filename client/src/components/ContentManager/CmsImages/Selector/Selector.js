import React, { Component } from 'react'
import axios from 'axios'

class Selector extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_IMAGES)
      .then(res => {
        const images = res.data
        this.setState({ images })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <p>Selector</p>
      </div>
    )
  }
}

export default Selector