import React, { Component, Fragment } from 'react'

import './Carousel.css'

class Carousel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgRefs: this.props.imgRefs,
      indices: this.props.imgRefs.length - 1,
      index: 0,
      hover: 'init',
    }
  }
  
  leftClick = event => {
    event.preventDefault()
    let indices = this.state.indices
    let index = this.state.index
    if (!index) {
      index = indices
      this.setState({ index })
    } else {
      --index
      this.setState({ index })
    }
  }

  rightClick = event => {
    event.preventDefault()
    let indices = this.state.indices
    let index = this.state.index
    if (index === indices) {
      index = 0;
      this.setState({ index })
    } else {
      ++index;
      this.setState({ index })
    }
  }

  prevInd() {
    let index = this.state.index
    if (!index) {
      return (this.state.indices)
    } else {
      return --index
    }
  }

  nextInd() {
    let index = this.state.index;
    if (index === this.state.indices) {
      index = 0
      return index
    } else {
      return ++index
    }
  }

  toggleHover() {
    let hover = this.state.hover
    if (hover === "init") {
      hover = true
      this.setState({ hover })
    } else {
      hover = !hover
      this.setState({ hover })
    }
  }

  decideClass() {
    const hover = this.state.hover
    switch (hover) {
      case "init":
        return "card"
      case true:
        return "pop-out"
      default:
        return "pop-in"
    }
  }

  render() {
    return (
      <div className="carousel-wrapper">
            <div
              className={this.decideClass() + ' left'}
              onClick={this.leftClick}
              onMouseEnter={() => this.toggleHover()}
              onMouseLeave={() => this.toggleHover()}>
              <img src={this.state.imgRefs[this.prevInd()].url} />
            </div>
            <div className="active-card">
              {/* <h3>{this.state.imgRefs[this.state.index].title}</h3> */}
              <div className="active-image">
               <img src={this.state.imgRefs[this.state.index].url} />
              </div>
              <p>{this.state.imgRefs[this.state.index]._id}</p>
            </div>
            <div
              className={this.decideClass()}
              onClick={this.rightClick}
              onMouseEnter={() => this.toggleHover()}
              onMouseLeave={() => this.toggleHover()}>
              <img src={this.state.imgRefs[this.nextInd()].url} />
            </div>
      </div>
    );
  }
}

export default Carousel