import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Carousel from './Carousel/Carousel'

import './Gallery.css';

class Gallery extends Component {
  state = {
    imgRefs: [],
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_GALLERY_GET)
      .then(res => {
        const imgRefs = []
        res.data.forEach(image => {
          imgRefs.push(image.url)
        });
        this.setState({ imgRefs })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="gallery">
        {this.state.imgRefs.length < 3 ? (
          <p>loading</p>
        ) : (
          <Fragment>
            <Carousel imgRefs={this.state.imgRefs} />
          </Fragment>
        )}
      </div>
    )
  }
}

export default Gallery;