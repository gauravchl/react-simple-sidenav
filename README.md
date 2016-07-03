# react-simple-sidenav [![npm](https://img.shields.io/npm/v/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav) [![npm](https://img.shields.io/npm/dm/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav)

A simple React component for side navigation, Inspired by [Side Navigation Bar TL;DW episode of Supercharged](https://youtu.be/Mhnj3PiPnZw)

**Demo:**  https://gauravchl.github.io/react-simple-sidenav/example/

**Install:**
```
npm install react-simple-sidenav
```

**Use:**
```html
import SideNav from 'react-simple-sidenav';

<SideNav
  style={}
  showNav={}
  onHideNav={}
  onShowNav={}
  navStyle={} >

</SideNav>
```
**Props:**

Props | Type | Description
------|------ | -------------
style | object | Style for root element
navStyle | object | Style for nav element
showNav | boolean | Control whether to open or close side navigation
onShowNav | function | Trigger when navigation opens
onHideNav | function | Trigger when navigation close
children  | node | Content of navigation



**Example:**

```html
import React   from 'react'
import SideNav from 'react-simple-sidenav';


var Layout = React.createClass({

  getInitialState(){
    return {
      showNav: false
    }
  },


  getSideNavContent(){
    let styles={
      title:{
        background: '#E91E63',
        color: '#fff',
        fontWeight: 400,
        margin: 0,
        lineHeight: '82px',
        padding: 22
      },
      li:{
        padding: 22,
        cursor: 'pointer'
      }
    };

    return (
      <div>
        <h1 style={styles.title}>Simple SideNav</h1>
        <ul>
          <li style={styles.li}>Item 1</li>
          <li style={styles.li}>Item 2</li>
        </ul>
      </div>
    )
  },


  render(){
    return (
      <div>
        <div style={{width:'100%', background:"#0AC"}}>
          <div style={{padding: 14}} onClick={() => this.setState({showNav: !this.state.showNav})}>
            <svg xmlns="http://www.w3.org/2000/svg" cursor="pointer" fill="#fff" height="24" viewBox="0 0 24 24" width="24">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
          </div>
        </div>

        <SideNav showNav={this.state.showNav} onHideNav={()=>this.setState({showNav:false})}>
          {this.getSideNavContent()}
        </SideNav>
      </div>
    )
  }

})

```
