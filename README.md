# react-simple-sidenav [![npm](https://img.shields.io/npm/v/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav) [![npm](https://img.shields.io/npm/dm/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav)

Simple, light weight, fully customizable React component for side navigation, Inspired by [Side Navigation Bar TL;DW episode of Supercharged](https://youtu.be/Mhnj3PiPnZw)

**Demo:**  https://gauravchl.github.io/react-simple-sidenav/example/

<img width="400" alt="screen shot 2016-07-24 at 2 28 16 pm" src="https://cloud.githubusercontent.com/assets/3471415/17082916/f53e196e-51ab-11e6-84bc-9fc36068c42e.png">



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




**Examples:**

[with default styles]

```html
  import react from 'react';
  import SideNav, {MenuIcon} from 'react-simple-sidenav';

  React.createClass({
    render() {
      return(
        <MenuIcon onClick={() => this.setState({showNav: true})}/>

        <SideNav
          showNav = {this.state.showNav}
          onHideNav = {() => this.setState({showNav: false})} />
      )
    }
  })

```

[with custom styles]

```html

  <SideNav
    showNav        =  {this.state.showNav}
    onHideNav      =  {() => this.setState({showNav: false})}
    title          =  "Hello World"
    items          =  {['home', 'services', 'about', 'contact']}
    titleStyle     =  {{backgroundColor: '#4CAF50'}}
    itemStyle      =  {{backgroundColor: '#fff'}}
    itemHoverStyle =  {{backgroundColor: '#CDDC39'}}
    />

```

[with custom items]

```html
  <SideNav
    showNav={this.state.showNav3}
    onHideNav={()=>this.setState({showNav3:false})}
    title={<div>Hello octo <img src='git-mark.png' width='26' /></div>}
    titleStyle={{backgroundColor: '#2196F3'}}
    items={[
      <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>View Source on github</a>,
      <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
      <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/example'>demo</a>
      ]} />


```

To see the demo of above examples [follow this link](https://gauravchl.github.io/react-simple-sidenav/example/).
