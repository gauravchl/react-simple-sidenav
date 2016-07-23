# react-simple-sidenav [![npm](https://img.shields.io/npm/v/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav) [![npm](https://img.shields.io/npm/dm/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav)

Simple, light weight, fully customizable React component for side navigation, Inspired by [Side Navigation Bar TL;DW episode of Supercharged](https://youtu.be/Mhnj3PiPnZw)

**Demo:**  https://gauravchl.github.io/react-simple-sidenav/example/

**Install:**
```
npm install react-simple-sidenav
```

**Use:**
```html
import SideNav from 'react-simple-sidenav';

<SideNav
  title="Simple Sidenav"
  items={['Item 1', 'Item 2']}
  />
```
**Props:**

Props | Type | Description
------|------ | -------------
style | object | Style for root element
navStyle | object | Style for nav element
showNav | boolean | Control whether to open or close side navigation
onShowNav | function | Trigger when navigation opens
onHideNav | function | Trigger when navigation close
title      | node | Will display on top
titleStyle | object | Styles for title
items      | [node] | Array of items in navigation list below the title
itemStyle  | object | Styles for item
itemHoverStyle | object | Hover style for item
children  | node | Content of navigation. If supplying children to SideNav, title and items will be ignore and replaced by children




**Example:** (with default title and item list)

```html
import React   from 'react'
import SideNav, {MenuIcon} from 'react-simple-sidenav';


var Layout = React.createClass({

  getInitialState(){
    return {
      showNav: false
    }
  },



  render(){
    return (
      <div>
        <div style={{width:'100%', background:"#0AC"}}>
          <MenuIcon onclick={() => this.setState({showNav: !this.state.showNav})} />
        </div>

        <SideNav
          showNav = {this.state.showNav}
          onHideNav = {() => this.setState({showNav:false})}
          title = 'My Simple SideNav'
          items = {[<a href='/home'>home</a>, <a href='/about'>about</a> ]}

          />

      </div>
    )
  }

})

```

To see more example with all available options please see the [Demo here](https://gauravchl.github.io/react-simple-sidenav/example/).
