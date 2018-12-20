import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Carousel from './Carousel/Carousel'

import './Gallery.css';

class Gallery extends Component {
  state = {
    imgRefs: [],
    indices: 0,
    mounted: false
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_DEV_API)
      .then(res => {
        const imgRefs = res.data
        const indices = imgRefs.length - 1
        const mounted = true
        this.setState({ imgRefs, indices, mounted })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="gallery">
        {this.state.imgRefs === [] ? (
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