import React, { Component }   from 'react';
import SideNav, { MenuIcon }  from '../../src/index.jsx';

export default class Layout extends Component {
  state = {
    showNav1: false,
    showNav2: false,
    showNav3: false,
    showNav4: false,
  }

  styles = {
    menuBar: {
      width: '100%',
      background: '#0AC',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      position: 'fixed',
      zIndex: 2,
      top: 0,
    },
    exampleWrapper: {
      textAlign: 'center',
    },
    exampleBox: {
      textAlign: 'left',
      maxWidth: 500,
      width: '90%',
      margin: '32px 12px',
      display: 'inline-block',
    },
    topBar: {
      background: '#0ac',
      color: '#fff',
      fontSize: '14px',
    },

    codeWrap: {
      background: '#f5f5f5',
      whiteSpace: 'pre',
      overflow: 'scroll',
      height: 300,
    },
    bg1: {
      backgroundColor: '#e91e63',
    },
    bg2: {
      backgroundColor: '#4CAF50',
    },
    bg3: {
      backgroundColor: '#2196F3',
    },
    bg4: {
      backgroundColor: '#FF5722',
    },
    menuIcon: {
      padding: 12,
      verticalAlign: 'middle',
    },
  }

  toggleSideNav = key => () => {
    this.setState(prevState => {
      const value = !prevState[key]
      return { [key]: value }
    })
  }

  render() {
    const { showNav1, showNav2, showNav3, showNav4 } = this.state
    const styles = this.styles;

    return (
      <div style={{paddingTop: 48}}>
        <div style={styles.menuBar}>
          <MenuIcon onClick={this.toggleSideNav('showNav1')} style={{verticalAlign: 'middle', padding: '12px'}}/>
          Demo [react-simple-sidenav]
          <a style={{margin: '0 8px 0 auto'}} href='https://github.com/gauravchl/react-simple-sidenav'>
            <img width='28' src='git-mark.png'/>
          </a>
        </div>

        <div style={styles.exampleWrapper}>
          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg1)}>
              <div className='ripple'><MenuIcon style={styles.menuIcon} onClick={this.toggleSideNav('showNav1')}/></div>
              Demo 1 [with default styles]
            </div>
            <div style={styles.codeWrap}><code>{example1}</code></div>
          </div>

          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg2)}>
              <div className='ripple delay-1'>
                <MenuIcon style={styles.menuIcon} onClick={this.toggleSideNav('showNav2')}/>
              </div>
              Demo 2 [with custom styles]
            </div>
            <div style={styles.codeWrap}><code>{example2}</code></div>
          </div>

          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg3)}>
              <div className='ripple delay-2'>
                <MenuIcon style={styles.menuIcon} onClick={this.toggleSideNav('showNav3')}/>
              </div>
              Demo 3 [with custom items]
            </div>
            <div style={styles.codeWrap}><code>{example3}</code></div>
          </div>

          <div style={styles.exampleBox}>
            <div style={Object.assign({}, styles.topBar, styles.bg4)}>
              <div className='ripple delay-2'>
                <MenuIcon style={styles.menuIcon} onClick={this.toggleSideNav('showNav4')}/>
              </div>
              Demo 4 [open from right]
            </div>
            <div style={styles.codeWrap}><code>{example4}</code></div>
          </div>
        </div>

        <SideNav
          showNav={showNav1}
          onShowNav={_ => console.log('onShowNav')}
          onHideNav={this.toggleSideNav('showNav1')} />

        <SideNav
          showNav={showNav2}
          onHideNav={this.toggleSideNav('showNav2')}
          title='Hello World'
          titleStyle={styles.bg2}
          items={['home', 'services', 'about', 'contact']}
          itemStyle={{backgroundColor: '#fff'}}
          itemHoverStyle={{backgroundColor: '#CDDC39'}} />

        <SideNav
          showNav={showNav3}
          onHideNav={this.toggleSideNav('showNav3')}
          title={<div>Hello octo <img src='git-mark.png' width='26'/></div>}
          titleStyle={styles.bg3}
          items={[
            <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
            <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
            <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>,
            ]} />

        <SideNav
          openFromRight={true}
          showNav={showNav4}
          onHideNav={this.toggleSideNav('showNav4')}
          title='Open From right'
          titleStyle={styles.bg4}
          items={['Item1', 'Item2', 'Item3']} />

      </div>
    )
  }
}

const example1 = `
  React.createClass({
    render() {
      return(
        <MenuIcon onClick={this.toggleSideNav('showNav1')}/>

        <SideNav
          showNav = {showNav1}
          onHideNav = {this.toggleSideNav('showNav1')} />
      )
    }
  })
`

const example2 = `
  <SideNav
    showNav        =  {showNav2}
    onHideNav      =  {this.toggleSideNav('showNav2')}
    title          =  "Hello World"
    items          =  {['home', 'services', 'about', 'contact']}
    titleStyle     =  {{backgroundColor: '#4CAF50'}}
    itemStyle      =  {{backgroundColor: '#fff'}}
    itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
  />

`

const example3 = `
  <SideNav
    showNav={showNav3}
    onHideNav={this.toggleSideNav('showNav3'):false})}
    title={<div>Hello octo <img src='git-mark.png' width='26' /></div>}
    titleStyle={{backgroundColor: '#2196F3'}}
    items={[
      <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
      <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
      <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>
    ]}
  />

`

const example4 = `
  <SideNav
    openFromRight={true}
    showNav={showNav4}
    onHideNav={this.toggleSideNav('showNav4')}
    title='Open From right'
    titleStyle={{backgroundColor: '#FF5722'}}
    items={['Item1', 'Item2', 'Item3']} />
`
