import React, { Component, Fragment } from 'react'
import axios from 'axios'

import './CmsImages.css'

class CmsGallery extends Component {
  state = {
    file: null,
    url: '',
    imgRef: {},
    err: null
  }

  handleChange = e => {
    e.preventDefault()
    console.log(e.target.files)
    const reader = new FileReader()
    const file = e.target.files[0]
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
    axios
      .post(process.env.REACT_APP_DEV_API, img, {
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
      <div className="CmsGallery">
        <div>
          <form onSubmit={this.handleSubmit}>
          <input name="image" type="file" onChange={e => this.handleChange(e)} />
          <button type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
        </div>
        <div>
          <Fragment>
            {!this.state.url ? (
              <p>none selected</p>
            ) : (
              <img src={this.state.url} alt="selected img" />
            )}
          </Fragment>
          <Fragment>
            {!this.state.imgRef.url ? (
              <p>no image</p>
            ): (
              <img src={this.state.imgRef.url} alt="returned img" />
            )}
          </Fragment>
        </div>
        {this.state.err ? (
          <Fragment>
            {this.state.err.message}
          </Fragment>
        ) : (
          <Fragment>
            <p>All Good</p>
          </Fragment>
        )}
      </div>
    )
  }
}

export default CmsGallery;
