var example1 = '\n\n  import react from \'react\';\n  import SideNav, {MenuIcon} from \'react-simple-sidenav\';\n\n  React.createClass({\n    render() {\n      return(\n        <MenuIcon onClick={() => this.setState({showNav: true})}/>\n\n        <SideNav\n          showNav = {this.state.showNav}\n          onHideNav = {() => this.setState({showNav: false})} />\n      )\n    }\n  })\n\n';
var example2 = '\n  <SideNav\n    showNav        =  {this.state.showNav}\n    onHideNav      =  {() => this.setState({showNav: false})}\n    title          =  "Hello World"\n    items          =  {[\'home\', \'services\', \'about\', \'contact\']}\n    titleStyle     =  {{backgroundColor: \'#4CAF50\'}}\n    itemStyle      =  {{backgroundColor: \'#fff\'}}\n    itemHoverStyle =  {{backgroundColor: \'#CDDC39\'}}\n    />\n\n';
var example3 = '\n  <SideNav\n    showNav={this.state.showNav3}\n    onHideNav={()=>this.setState({showNav3:false})}\n    title={<div>Hello octo <img src=\'git-mark.png\' width=\'26\' /></div>}\n    titleStyle={{backgroundColor: \'#2196F3\'}}\n    items={[\n      <a target=\'_blank\' href=\'https://github.com/gauravchl/react-simple-sidenav\'>View Source on github</a>,\n      <a target=\'_blank\' href=\'https://www.npmjs.com/package/react-simple-sidenav\'>Install via npm</a>,\n      <a target=\'_blank\' href=\'https://gauravchl.github.io/react-simple-sidenav/example\'>demo</a>\n      ]} />\n\n';

var Layout = React.createClass({
  displayName: 'Layout',
  getInitialState: function getInitialState() {
    return {
      showNav1: false,
      showNav2: false,
      showNav3: false,
      showNav4: false
    };
  },
  render: function render() {
    var _this2 = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: { width: '100%', background: "#0AC", color: '#fff' } },
        React.createElement(MenuIcon, { onClick: function onClick() {
            return _this2.setState({ showNav1: true });
          }, style: { verticalAlign: 'middle', padding: '12px' } }),
        'Demo [react-simple-sidenav]'
      ),
      React.createElement(
        'div',
        { className: 'example-wrapper' },
        React.createElement(
          'div',
          { className: 'example-box' },
          React.createElement(
            'div',
            { className: 'top-bar bg1' },
            React.createElement(
              'div',
              { className: 'ripple' },
              React.createElement(MenuIcon, { className: 'menu-icon', onClick: function onClick() {
                  return _this2.setState({ showNav1: true });
                } })
            ),
            ' Demo 1 [with default styles]'
          ),
          React.createElement(
            'div',
            { className: 'code-wrap' },
            React.createElement(
              'code',
              null,
              example1
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'example-box' },
          React.createElement(
            'div',
            { className: 'top-bar bg2' },
            React.createElement(
              'div',
              { className: 'ripple delay-1' },
              React.createElement(MenuIcon, { className: 'menu-icon', onClick: function onClick() {
                  return _this2.setState({ showNav2: true });
                } })
            ),
            'Demo 2 [with custom styles]'
          ),
          React.createElement(
            'div',
            { className: 'code-wrap' },
            React.createElement(
              'code',
              null,
              example2
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'example-box' },
          React.createElement(
            'div',
            { className: 'top-bar bg3' },
            React.createElement(
              'div',
              { className: 'ripple delay-2' },
              React.createElement(MenuIcon, { className: 'menu-icon', onClick: function onClick() {
                  return _this2.setState({ showNav3: true });
                } })
            ),
            ' Demo 3 [with custom items]'
          ),
          React.createElement(
            'div',
            { className: 'code-wrap' },
            React.createElement(
              'code',
              null,
              example3
            )
          )
        )
      ),
      React.createElement(SideNav, {
        showNav: this.state.showNav1,
        onHideNav: function onHideNav() {
          return _this2.setState({ showNav1: false });
        } }),
      React.createElement(SideNav, {
        showNav: this.state.showNav2,
        onHideNav: function onHideNav() {
          return _this2.setState({ showNav2: false });
        },
        title: 'Hello World',
        titleStyle: { backgroundColor: '#4CAF50' },
        items: ['home', 'services', 'about', 'contact'],
        itemStyle: { backgroundColor: '#fff' },
        itemHoverStyle: { backgroundColor: '#CDDC39' } }),
      React.createElement(SideNav, {
        showNav: this.state.showNav3,
        onHideNav: function onHideNav() {
          return _this2.setState({ showNav3: false });
        },
        title: React.createElement(
          'div',
          null,
          'Hello octo ',
          React.createElement('img', { src: 'git-mark.png', width: '26' })
        ),
        titleStyle: { backgroundColor: '#2196F3' },
        items: [React.createElement(
          'a',
          { target: '_blank', href: 'https://github.com/gauravchl/react-simple-sidenav' },
          'View Source on github'
        ), React.createElement(
          'a',
          { target: '_blank', href: 'https://www.npmjs.com/package/react-simple-sidenav' },
          'Install via npm'
        ), React.createElement(
          'a',
          { target: '_blank', href: 'https://gauravchl.github.io/react-simple-sidenav/example' },
          'demo'
        )] })
    );
  }
});




ReactDOM.render(
  React.createElement(Layout, null, null),
  document.getElementById('example')
);




//
// var example1 = `
//
//   import react from 'react';
//   import SideNav, {MenuIcon} from 'react-simple-sidenav';
//
//   React.createClass({
//     render() {
//       return(
//         <MenuIcon onClick={() => this.setState({showNav: true})}/>
//
//         <SideNav
//           showNav = {this.state.showNav}
//           onHideNav = {() => this.setState({showNav: false})} />
//       )
//     }
//   })
//
// `
//
// var example2 = `
//   <SideNav
//     showNav        =  {this.state.showNav}
//     onHideNav      =  {() => this.setState({showNav: false})}
//     title          =  "Hello World"
//     items          =  {['home', 'services', 'about', 'contact']}
//     titleStyle     =  {{backgroundColor: '#4CAF50'}}
//     itemStyle      =  {{backgroundColor: '#fff'}}
//     itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
//     />
//
// `
//
// var example3 = `
//   <SideNav
//     showNav={this.state.showNav3}
//     onHideNav={()=>this.setState({showNav3:false})}
//     title={<div>Hello octo <img src='git-mark.png' width='26' /></div>}
//     titleStyle={{backgroundColor: '#2196F3'}}
//     items={[
//       <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
//       <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
//       <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>
//       ]} />
//
// `
//
//
// var Layout = React.createClass({
//   getInitialState(){
//     return {
//       showNav1: false,
//       showNav2: false,
//       showNav3: false,
//       showNav4: false,
//     }
//   },
//
//   render(){
//     return (
//       <div>
//         <div style={{width:'100%', background:"#0AC", color: '#fff'}}>
//           <MenuIcon onClick={()=>this.setState({showNav1: true})} style={{verticalAlign: 'middle', padding: '12px'}}/>
//           Demo [react-simple-sidenav]
//         </div>
//
//
//         <div className='example-wrapper'>
//           <div className='example-box'>
//             <div className='top-bar bg1'><div className='ripple'><MenuIcon className='menu-icon' onClick={()=>this.setState({showNav1: true})}/></div> Demo 1 [with default styles]</div>
//             <div className='code-wrap'><code>{example1}</code></div>
//           </div>
//           <div className='example-box'>
//             <div className='top-bar bg2'><div className='ripple delay-1'><MenuIcon className='menu-icon' onClick={()=>this.setState({showNav2: true})}/></div>Demo 2 [with custom styles]</div>
//             <div className='code-wrap'><code>{example2}</code></div>
//           </div>
//           <div className='example-box'>
//             <div className='top-bar bg3'><div className='ripple delay-2'><MenuIcon className='menu-icon' onClick={()=>this.setState({showNav3: true})}/></div> Demo 3 [with custom items]</div>
//             <div className='code-wrap'><code>{example3}</code></div>
//           </div>
//         </div>
//
//
//         <SideNav
//           showNav={this.state.showNav1}
//           onHideNav={()=>this.setState({showNav1:false})} />
//
//         <SideNav
//           showNav={this.state.showNav2}
//           onHideNav={()=>this.setState({showNav2:false})}
//           title="Hello World"
//           titleStyle={{backgroundColor: '#4CAF50'}}
//           items={['home', 'services', 'about', 'contact']}
//           itemStyle={{backgroundColor: '#fff'}}
//           itemHoverStyle={{backgroundColor: '#CDDC39'}} />
//
//         <SideNav
//           showNav={this.state.showNav3}
//           onHideNav={()=>this.setState({showNav3:false})}
//           title={<div>Hello octo <img src='git-mark.png' width='26'/></div>}
//           titleStyle={{backgroundColor: '#2196F3'}}
//           items={[
//             <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
//             <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
//             <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>
//             ]} />
//
//
//       </div>
//     )
//   }
// })
