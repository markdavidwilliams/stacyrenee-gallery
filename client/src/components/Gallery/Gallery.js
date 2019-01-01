import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Carousel from './Carousel/Carousel'

import './Gallery.css';

class Gallery extends Component {
  state = {
    images: []
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_GALLERY)
      .then(res => {
        const images = res.data
        this.setState({ images })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="gallery">
        {this.state.images.length < 3 ? (
          <p>loading</p>
        ) : (
          <Fragment>
            <Carousel images={this.state.images} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default Gallery;