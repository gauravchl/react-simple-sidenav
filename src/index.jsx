import React     from 'react';
import PropTypes from 'prop-types';

class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this._nav = React.createRef();
    this.hideNav = this.hideNav.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
    this.getDefaultContent = this.getDefaultContent.bind(this);
    this.update = this.update.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  hideNav = () => {
    const { onHideNav } = this.props;
    onHideNav && onHideNav();
  }

  onTouchStart = evt => {
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  }

  onTouchMove = evt => {
    let { openFromRight } = this.props;
    if (!this.touchingSideNav) return;
    this.currentX = evt.touches[0].pageX;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
  }

  onTouchEnd = evt => {
    const { openFromRight } = this.props;
    if (!this.touchingSideNav) return;
    this.touchingSideNav = false;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    this._nav.current.style.transform = '';
    if (!openFromRight && translateX < 0) this.hideNav();
    if (openFromRight && translateX > 0) this.hideNav();
  }

  update = () => {
    const { openFromRight } = this.props;
    if (!this.touchingSideNav) return;
    requestAnimationFrame(this.update);
    const translateX = Math[openFromRight ? 'max' : 'min'](0, this.currentX - this.startX);
    this._nav.current.style.transform = `translateX(${translateX}px)`;
  }

  getDefaultContent = () => {
    const { items, itemStyle, titleStyle, itemHoverStyle, title } = this.props
    const styles = {
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

    Object.assign(styles.li, itemStyle);
    Object.assign(styles.title, titleStyle);

    const handleItemHover = e => enter => {
      if (enter)
        Object.assign(e.currentTarget.style, styles.li, (itemHoverStyle || {backgroundColor: '#f5f5f5'}))
      else
        Object.assign(e.currentTarget.style, styles.li)
    };

    return (
      <div>
        <h1 style={styles.title}>{title || 'Simple SideNav'}</h1>
        <ul>
          {items
            ? items.map((item, key) => <li key={'item' + key} style={styles.li} onMouseOver={handleItemHover(true)} onMouseOut={handleItemHover(false)}>{item}</li>)
            : <li key='item1' style={styles.li}>Item 1</li>
          }
        </ul>
      </div>
    )
  }

  getStyle = () => {
    const { openFromRight, showNav } = this.props;
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
        transition : `transform ${showNav ? '0.33s' : '0.13s' } cubic-bezier(0,0,0.3,1)`,
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
  }

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
          ref={this._nav}
          >
          {this.props.children || this.getDefaultContent()}
        </nav>
      </aside>
    )
  }
}

SideNav.propTypes = {
  style:          PropTypes.object,
  navStyle:       PropTypes.object,
  titleStyle:     PropTypes.object,
  itemStyle:      PropTypes.object,
  itemHoverStyle: PropTypes.object,
  title:          PropTypes.node,
  children:       PropTypes.node,
  items:          PropTypes.arrayOf(PropTypes.node),
  showNav:        PropTypes.bool,
  openFromRight:  PropTypes.bool,
  onHideNav:      PropTypes.func,
  onShowNav:      PropTypes.func,
}

let MenuIcon = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
    fill="#fff"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export { SideNav, MenuIcon };
export default SideNav;
