import React, { Component } from 'react'
import axios from 'axios'

import './Uploader.css'

class Uploader extends Component {
  state = {
    file: null,
    url: '',
    imgRef: {},
    title: '',
    year: '',
    landing: false,
    about: false,
    gallery: false
  }

  handleTextChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleCheckToggle = event => {
    this.setState({ [event.target.name]: !this.state[event.target.name]})
  }

  handleImageChange = event => {
    const reader = new FileReader()
    const file = event.target.files[0]
    reader.onloadend = () => {
      this.setState({ file, url: reader.result })
    }
    reader.readAsDataURL(file)
  }

  buildImgData() {
    const imgData = new FormData()
    const data = this.state
    const skipState = ['url', 'imgRef']
    for (const key in data) {
      if (!skipState.includes(key)) {
        if (key === 'file') {
          console.log('hit file check')
          imgData.append('image', this.state.file, this.state.file.name)
        } else {
          imgData.append(`${key}`, `${data[key]}`)
        }
      }
    }
    return imgData
  }

  handleSubmit = event => {
    event.preventDefault()
    const img = this.buildImgData()
    console.log('image', img)
    axios
      .post(process.env.REACT_APP_IMAGES, img)
      .then(res => {
        const imgRef = res.data
        this.setState({ imgRef })
      })
  }

  render() {
    return (
      <div className="uploader-modal">
        <form>
          <input name='image' type='file' onChange={this.handleImageChange} />
          <input name='title' placeholder='Title' onChange={this.handleTextChange} />
          <input name='year' placeholder='Year' onChange={this.handleTextChange} />
          <input name='landing' type='checkbox' checked={this.state.landing} onClick={this.handleCheckToggle} />
          <label for='landing'>Landing?</label>
          <input name='about' type='checkbox' checked={this.state.about} onClick={this.handleCheckToggle} />
          <label for='about'>About?</label>
          <input name='gallery' type='checkbox' checked={this.state.gallery} onClick={this.handleCheckToggle} />
          <label for='gallery'>Gallery?</label>
          <button type='submit' onClick={this.handleSubmit}>Save Image</button>
        </form>
      </div>
    )
  }
}

export default Uploader