import React, { Component, Fragment } from 'react';
import axios from 'axios';

import './Gallery.css';

class Gallery extends Component {
  state = {
    foo: []
  }

  componentDidMount() {
    axios
      .get(process.env.REACT_APP_DEV_API)
      .then(res => {
        const foo = res.data
        this.setState({ foo })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="gallery">
        {this.state.data === [] ? (
          <p>loading</p>
        ) : (
          <Fragment>
            {this.state.foo.map(item => {
              return <p key={item._id}>{item.foo}</p>
            })}
          </Fragment>
        )}
      </div>
    )
  }
}

export default Gallery;