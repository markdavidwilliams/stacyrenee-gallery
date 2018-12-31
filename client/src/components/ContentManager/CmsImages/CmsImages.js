import React, { Component, Fragment } from 'react'
import axios from 'axios'

import Uploader from './Uploader/Uploader'

import './CmsImages.css'

class CmsGallery extends Component {
  state = {
    file: null,
    url: '',
    imgRef: {},
    year: '',
    err: null
  }

  handleTextChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleImageChange = event => {
    event.preventDefault()
    console.log(event.target.files)
    const reader = new FileReader()
    const file = event.target.files[0]
    console.log(file)
    reader.onloadend = () => {
      this.setState({ file, url: reader.result })
    }
    reader.readAsDataURL(file)
  }

  handleSubmit = e => {
    e.preventDefault()
    const img = new FormData()
    img.append('image', this.state.file, this.state.file.name)
    img.append('year', `${this.state.year}`)
    axios
      .post(process.env.REACT_APP_IMAGES, img, {
        onUploadProgress: progressEvent => {
          console.log(progressEvent.loaded / progressEvent.total)
        }
      })
      .then(res => {
        console.log('responsed')
        const imgRef = res.data
        this.setState({ imgRef })
      })
      .catch(err => this.setState({err}))
  }

  render() {
    return (
      <Uploader />
    )
  }
}

export default CmsGallery;
