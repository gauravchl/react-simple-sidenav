SideNav = React.createClass({
  displayName: 'SideNav',

  propTypes: {
    style: React.PropTypes.object,
    navStyle: React.PropTypes.object,
    children: React.PropTypes.node,
    showNav: React.PropTypes.bool,
    onHideNav: React.PropTypes.func,
    onShowNav: React.PropTypes.func
  },

  getInitialState: function getInitialState() {
    return {
      showNav: this.props.showNav || false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if (nextProps.showNav != this.props.showNav && nextProps.showNav != this.state.showNav) nextProps.showNav ? this.showNav() : this.hideNav();
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps, nextStates) {
    if (nextProps.showNav != this.props.showNav && nextProps.showNav == this.state.showNav) return false;
    return true;
  },
  showNav: function showNav() {
    this.refs.nav.style.transition = 'transform 0.33s cubic-bezier(0,0,0.3,1)';
    this.setState({ showNav: true }, this.props.onShowNav);
  },
  hideNav: function hideNav() {
    this.refs.nav.style.transition = 'transform 0.13s cubic-bezier(0,0,0.3,1)';
    this.setState({ showNav: false }, this.props.onHideNav);
  },
  onTouchStart: function onTouchStart(evt) {
    this.startX = evt.touches[0].pageX;
    this.currentX = this.startX;
    this.touchingSideNav = true;
    requestAnimationFrame(this.update);
  },
  onTouchMove: function onTouchMove(evt) {
    if (!this.touchingSideNav) return;
    this.currentX = evt.touches[0].pageX;
    var translateX = Math.min(0, this.currentX - this.startX);
    if (translateX < 0) evt.preventDefault();
  },
  onTouchEnd: function onTouchEnd(evt) {
    if (!this.touchingSideNav) return;
    this.touchingSideNav = false;
    var translateX = Math.min(0, this.currentX - this.startX);
    this.refs.nav.style.transform = '';
    if (translateX < 0) this.hideNav();
  },
  update: function update() {
    if (!this.touchingSideNav) return;
    requestAnimationFrame(this.update);
    var translateX = Math.min(0, this.currentX - this.startX);
    this.refs.nav.style.transform = 'translateX(' + translateX + 'px)';
  },
  getStyle: function getStyle() {
    var styles = {
      root: {
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        overflow: 'hidden',
        zIndex: 8,
        pointerEvents: this.state.showNav ? 'auto' : 'none'
      },
      nav: {
        position: 'relative',
        width: '90%',
        maxWidth: 400,
        height: '100%',
        background: '#FFF',
        boxShadow: '2px 0 12px rgba(0,0,0,0.4)',
        transform: this.state.showNav ? 'none' : 'translateX(-102%)',
        display: 'flex',
        willChange: 'transform',
        flexDirection: 'column'
      },
      overlay: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        opacity: this.state.showNav ? 1 : 0,
        background: 'rgba(0,0,0,0.4)',
        transition: 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
        willChange: 'opacity'
      }
    };

    Object.assign(styles.root, this.props.style);
    Object.assign(styles.nav, this.props.navStyle);
    return styles;
  },
  render: function render() {
    var styles = this.getStyle();
    return React.createElement(
      'aside',
      { style: styles.root },
      React.createElement('div', { style: styles.overlay, onClick: this.hideNav }),
      React.createElement(
        'nav',
        { style: styles.nav,
          onTransitionEnd: function onTransitionEnd(e) {
            e.target.style.transition = 'none';
          },
          onTouchStart: this.onTouchStart,
          onTouchMove: this.onTouchMove,
          onTouchEnd: this.onTouchEnd,
          ref: 'nav' },
        this.props.children || ''
      )
    );
  }
});
