import React, { Component } from 'react';
// import axios from 'axios';

import './Gallery.css';

class Gallery extends Component {
  state = {
    foo: []
  }

  componentDidMount() {
    // axios
    //   .get(process.env.REACT_APP_DEV_API)
    //   .then(res => {
    //     const foo = res.data
    //     this.setState({ foo })
    //   })
    //   .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="gallery">
        {/* {this.state.data === [] ? (
          <p>loading</p>
        ) : (
          <Fragment>
            {this.state.foo.map(item => {
              return <img key={item._id} src={item.data} alt='whooaaa'/>
            })}
          </Fragment>
        )} */}
      </div>
    )
  }
}

export default Gallery;