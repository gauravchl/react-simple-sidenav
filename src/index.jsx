import React from 'react';

let SideNav = React.createClass({
  propTypes: {
    style:          React.PropTypes.object,
    navStyle:       React.PropTypes.object,
    titleStyle:     React.PropTypes.object,
    itemStyle:      React.PropTypes.object,
    itemHoverStyle: React.PropTypes.object,
    title:          React.PropTypes.node,
    children:       React.PropTypes.node,
    items:          React.PropTypes.arrayOf(React.PropTypes.node),
    showNav:        React.PropTypes.bool,
    openFromRight:  React.PropTypes.bool,
    onHideNav:      React.PropTypes.func,
    onShowNav:      React.PropTypes.func,
  },

  getInitialState() {
    return {
      showNav: this.props.showNav || false,
    };
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.showNav != this.props.showNav && nextProps.showNav != this.state.showNav)
      nextProps.showNav ? this.showNav() : this.hideNav();
  },

  shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.showNav != this.props.showNav && nextProps.showNav == this.state.showNav)
      return false;
    return true;
  },

  showNav() {
    this.refs.nav.style.transition = 'transform 0.33s cubic-bezier(0,0,0.3,1)';
    this.setState({ showNav: true }, this.props.onShowNav);
  },

  hideNav() {
    this.refs.nav.style.transition = 'transform 0.13s cubic-bezier(0,0,0.3,1)';
    this.setState({ showNav: false }, this.props.onHideNav);
  },

  onTouchStart(evt) {
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  },

  onTouchMove(evt) {
    if (!this.touchingSideNav) return;
    this.currentX = evt.touches[0].pageX;
    const translateX = Math.min(0, this.currentX - this.startX);
    if (translateX < 0) evt.preventDefault();
  },

  onTouchEnd(evt) {
    if (!this.touchingSideNav) return;
    this.touchingSideNav = false;
    const translateX = Math.min(0, this.currentX - this.startX);
    this.refs.nav.style.transform = '';
    if (translateX < 0) this.hideNav();
  },

  update() {
    if (!this.touchingSideNav) return;
    requestAnimationFrame(this.update);
    const translateX = Math.min(0, this.currentX - this.startX);
    this.refs.nav.style.transform = `translateX(${translateX}px)`;
  },



  getDefaultContent() {
    let styles = {
      title: {
        background: '#E91E63',
        color: '#fff',
        fontWeight: 400,
        margin: 0,
        lineHeight: '82px',
        padding: 22,
      },
      li: {
        padding: 22,
        cursor: 'pointer',
        backgroundColor: '#fff',
      },
    };

    Object.assign(styles.li, this.props.itemStyle);
    Object.assign(styles.title, this.props.titleStyle);

    let handleItemHover = (e, enter) => {
      if (enter)
        Object.assign(e.currentTarget.style, styles.li, (this.props.itemHoverStyle || {backgroundColor: '#f5f5f5'}))
      else
        Object.assign(e.currentTarget.style, styles.li)
    };

    return (
      <div>
        <h1 style={styles.title}>{this.props.title || 'Simple SideNav'}</h1>
        <ul>
          { this.props.items
            ? this.props.items.map((item, key) => <li key={'item' + key} style={styles.li} onMouseOver={(e)=> handleItemHover(e, true)} onMouseOut={(e)=>handleItemHover(e, false)}>{item}</li>)
            : <li key='item1' style={styles.li}>Item 1</li>
          }
        </ul>
      </div>
    )
  },

  getStyle() {
    let { showNav } = this.state;
    let { openFromRight } = this.props;
    let styles = {
      root: {
        left     : 0,
        top      : 0,
        width    : '100%',
        height   : '100%',
        position : 'fixed',
        overflow : 'hidden',
        zIndex   : 8,
        pointerEvents : showNav ? 'auto' : 'none'
      },
      nav: {
        position   : 'relative',
        width      : '90%',
        maxWidth   : 400,
        height     : '100%',
        background : '#FFF',
        boxShadow  : '2px 0 12px rgba(0,0,0,0.4)',
        transform  : showNav ? 'none' : `translateX(${openFromRight ? 102 : -102}%)`,
        display    : 'flex',
        willChange : 'transform',
        flexDirection: 'column',
        float: openFromRight ? 'right' : 'left',
      },
      overlay:{
        position : 'absolute',
        width    : '100%',
        height   : '100%',
        top      : 0,
        left     : 0,
        opacity  : showNav ? 1 : 0 ,
        background : 'rgba(0,0,0,0.4)',
        transition : 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
        willChange : 'opacity',
      }
    };

    Object.assign(styles.root, this.props.style);
    Object.assign(styles.nav, this.props.navStyle);
    return styles;
  },



  render() {
    let styles = this.getStyle();


    return(
      <aside style={styles.root}>
        <div style={styles.overlay} onClick={this.hideNav}></div>
        <nav style={styles.nav}
          onTransitionEnd={(e) => { e.target.style.transition = 'none' }}
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          ref="nav">
          {this.props.children || this.getDefaultContent()}
        </nav>
      </aside>
    )
  }
});


let MenuIcon = React.createClass({
  render() {
    return (
      <svg {...this.props} xmlns="http://www.w3.org/2000/svg" cursor="pointer" fill="#fff" height="24" viewBox="0 0 24 24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
      </svg>
    )
  }
});



export {SideNav, MenuIcon};
export default SideNav;
