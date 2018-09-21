import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './Gallery.css';

class Gallery extends Component {
  state = {
    imgRefs: []
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_DEV_API)
      .then(res => {
        const imgRefs = res.data
        this.setState({ imgRefs })
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
            {this.state.imgRefs.map(item => {
              return <img key={item._id} src={item.url} alt='whooaaa'/>
            })}
          </Fragment>
        )}
      </div>
    )
  }
}

export default Gallery;