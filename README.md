# react-simple-sidenav [![npm](https://img.shields.io/npm/v/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav) [![npm](https://img.shields.io/npm/dm/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav)

Simple, light weight(4.78 kB), fully customizable React component for side navigation.

Inspired by [Side Navigation Bar TL;DW episode of Supercharged](https://youtu.be/Mhnj3PiPnZw)

**Demo:** https://gauravchl.github.io/react-simple-sidenav/demo/

<img width="400" alt="screen shot 2016-07-24 at 2 28 16 pm" src="https://cloud.githubusercontent.com/assets/3471415/17082916/f53e196e-51ab-11e6-84bc-9fc36068c42e.png">

**Install:**

```
npm install react-simple-sidenav
```

**Use:**

```html
import SideNav from 'react-simple-sidenav'; <SideNav title="Simple Sidenav" items={['Item 1', 'Item 2']} />
```

**Props:**

| Props          | Type     | Description                                                                                                      |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| style          | object   | Style for root element                                                                                           |
| navStyle       | object   | Style for nav element                                                                                            |
| titleStyle     | object   | Styles for title                                                                                                 |
| itemStyle      | object   | Styles for item                                                                                                  |
| itemHoverStyle | object   | Hover style for item                                                                                             |
| title          | node     | Will display on top                                                                                              |
| items          | [node]   | Array of items in navigation list below the title                                                                |
| showNav        | boolean  | Control whether to open or close side navigation                                                                 |
| openFromRight  | boolean  | This opens navigation from right side of the window, default is false (from left side).                          |
| onShowNav      | function | Trigger when navigation opens                                                                                    |
| onHideNav      | function | Trigger when navigation close                                                                                    |
| children       | node     | Content of navigation. If supplying children to SideNav, title and items will be ignore and replaced by children |

**Examples:**

```javascript
// With default styles
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();

  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} />
    </div>
  );
};
```

```javascript
// With custom styles
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();
  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />{' '}
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Hello World"
        items={['home', 'services', 'about', 'contact']}
        titleStyle={{ backgroundColor: '#4CAF50' }}
        itemStyle={{ backgroundColor: '#fff' }}
        itemHoverStyle={{ backgroundColor: '#CDDC39' }}
      />
    </div>
  );
};
```

```javascript
// With custom items
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent = (props) => {
  const [showNav, setShowNav] = useState();
  const navItems = [
    <a target="_blank" href="someLink">
      Link1
    </a>,
    <a target="_blank" href="someLink">
      Link2
    </a>,
    <a target="_blank" href="someLink">
      Link3
    </a>,
  ];

  const title = <h1>Hello octo </h1>;

  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
    </div>
  );
};
```

**Contributing:**

Please feel free to submit any bugs or suggestions as issues. Pull requests are welcome.
To build package locally run following commands which will build the package from source and update the demo inside `react-simple-sidenav/demo/`.

```
cd /react-simple-sidenav/
npm install
npm run build
```
