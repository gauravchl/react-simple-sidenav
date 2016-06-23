import React from 'react';

let SideNav = React.createClass({
  propTypes : {
    style     : React.PropTypes.object,
    navStyle  : React.PropTypes.object,
    children  : React.PropTypes.node,
    showNav   : React.PropTypes.bool,
    onHideNav : React.PropTypes.func,
    onShowNav : React.PropTypes.func

  },



  getInitialState(){
    return {
      showNav: this.props.showNav || false
    }
  },



  componentWillReceiveProps(nextProps){
    if(nextProps.showNav != this.props.showNav && nextProps.showNav != this.state.showNav)
      nextProps.showNav ? this.showNav() : this.hideNav()
  },



  shouldComponentUpdate(nextProps, nextStates){
    if(nextProps.showNav != this.props.showNav && nextProps.showNav == this.state.showNav)
      return false
    return true
  },



  showNav(){
    this.refs.nav.style['transition'] = 'transform 0.33s cubic-bezier(0,0,0.3,1)';
    this.setState({showNav: true}, this.props.onShowNav);
  },



  hideNav(){
    this.refs.nav.style['transition'] = 'transform 0.13s cubic-bezier(0,0,0.3,1)';
    this.setState({showNav: false}, this.props.onHideNav);
  },



  getStyle(){
    let styles= {
      root: {
        left     : 0,
        top      : 0,
        width    : '100%',
        height   : '100%',
        position : 'fixed',
        overflow : 'hidden',
        zIndex   : 8,
        pointerEvents : this.state.showNav ? 'auto' : 'none'
      },
      nav: {
        position   : 'relative',
        width      : '90%',
        maxWidth   : 400,
        height     : '100%',
        background : '#FFF',
        boxShadow  : '2px 0 12px rgba(0,0,0,0.4)',
        transform  : this.state.showNav ? 'none' : 'translateX(-102%)',
        display    : 'flex',
        willChange : 'transform',
        flexDirection: 'column'
      },
      overlay:{
        position : 'absolute',
        width    : '100%',
        height   : '100%',
        top      : 0,
        left     : 0,
        opacity  : this.state.showNav ? 1 : 0 ,
        background : 'rgba(0,0,0,0.4)',
        transition : 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
        willChange : 'opacity',
      }
    };

    Object.assign(styles.root, this.props.style);
    Object.assign(styles.nav, this.props.navStyle);
    return styles;
  },



  render(){
    let styles = this.getStyle();
    return(
      <aside style={styles.root}>
        <div style={styles.overlay} onClick={this.hideNav}></div>
        <nav style={styles.nav} onTransitionEnd={(e) => {e.target.style['transition']='none'}} ref="nav">
          {this.props.children || ''}
        </nav>
      </aside>
    )
  }
});

export default SideNav;
