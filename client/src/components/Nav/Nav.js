// dependencies
import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

// styles
import './Nav.css';

class Nav extends Component {
  state = {
    active: '',
    expanded: false,
  }

  componentDidMount() {
    let path = this.pathParser();
    if (!path) {
      return
    } else {
      const routes = [
        'gallery',
        'videos',
        'about',
        'exhibitions',
        'press'
      ]
      const allowed = routes.includes(path)
      if (allowed) {
        const active = path
        this.setState({ active })
      } else {
        return
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      const active = this.pathParser();
      this.setState({ active })
    }
  }

  pathParser() {
    return window.location.pathname.split('/')[1];
  }

  isActive = link => {
    const active = this.state.active;
    if (link === active) {
      return 'active';
    } else {
      return 'inactive';
    }
  }

  toggleExpanded = event => {
    event.preventDefault();
    const expanded = !this.state.expanded;
    this.setState({ expanded })
  }

  decideClass = elm => {
    const expanded = this.state.expanded;
    if (!expanded) {
      switch (elm) {
        case 'off-clicker':
          return 'off-clicker';
        case 'container':
          return 'container';
        case 'right-nav':
          return 'right-nav nx'
        case 'current':
          return 'current on active'
        default:
          return '';
      }
    } else {
      switch (elm) {
        case 'off-clicker':
          return 'off-clicker on';
        case 'container':
          return 'container expanded';
        case 'right-nav':
          return 'right-nav ex'
        case 'current':
          return 'current off active';
        default:
          return '';
      }
    }
  }

  toggleFire = (event, elm) => {
    event.preventDefault();
    const expanded = this.state.expanded;
    if (!expanded) {
      switch (elm) {
        case 'nav': // right section of nav bar
          this.toggleExpanded(event)
          break;
        default:
          return;
      }
    } else {
      switch (elm) {
        case 'menu': // actual menu button
          this.toggleExpanded(event)
          break;
        case 'off-clicker':
          this.toggleExpanded(event)
          break;
        case 'links':
          this.toggleExpanded(event) 
          break;
        case 'title':
          this.toggleExpanded(event)
          break;
        default:
          return;
      }
    }
  }

  render() {
    return (
      <Fragment>
        <div className={this.decideClass('off-clicker')} onClick={event => this.toggleFire(event, 'off-clicker')} />
        <div className={this.decideClass('container')}>
          <div className='nav-wrapper'>
            <div className='mobile-wrapper'>
              <div className='title' onClick={event => this.toggleFire(event, 'title')}>
                <Link to='/'>
                  <p>stacy renee</p>
                </Link>
              </div>
              <div className={this.decideClass('right-nav')} onClick={event => this.toggleFire(event, 'nav')}>
                <p className={this.decideClass('current')}>{this.state.active}</p>
                <img onClick={event => this.toggleFire(event, 'menu')} alt='menu'/>
              </div>
            </div>
            <div className='links' onClick={event => this.toggleFire(event, 'links')}>
              <Link to='/gallery' className={this.isActive('gallery')}>gallery</Link>
              <Link to='/videos' className={this.isActive('videos')}>videos</Link>
              <Link to='/about' className={this.isActive('about')}>about</Link>
              <Link to='/exhibitions' className={this.isActive('exhibitions')}>exhibitions</Link>
              <Link to='/press' className={this.isActive('press')}>press</Link>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Nav;