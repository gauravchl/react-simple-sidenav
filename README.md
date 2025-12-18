# react-simple-sidenav

[![npm](https://img.shields.io/npm/v/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav)
[![npm](https://img.shields.io/npm/dm/react-simple-sidenav.svg?maxAge=000)](https://www.npmjs.com/package/react-simple-sidenav)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/react-simple-sidenav)](https://bundlephobia.com/package/react-simple-sidenav)

A lightweight, customizable, and touch-friendly side navigation component for React. Built with TypeScript and fully compatible with React 18+.

✨ **Features:**
- ⚡️ Lightweight (only 1.45 kB gzipped)
- 🎨 Fully customizable styles
- 📱 Touch-friendly with swipe gestures
- 🔧 TypeScript support
- ♿️ Accessible
- 🚀 Modern React 18+ support

**Demo:** https://gauravchl.github.io/react-simple-sidenav

<img width="400" alt="React Simple SideNav Demo" src="https://cloud.githubusercontent.com/assets/3471415/17082916/f53e196e-51ab-11e6-84bc-9fc36068c42e.png">

## Installation

```bash
npm install react-simple-sidenav
```

or with yarn:

```bash
yarn add react-simple-sidenav
```

or with bun:

```bash
bun add react-simple-sidenav
```

## Quick Start

```tsx
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <div>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
      />
    </div>
  );
};
```

## API

### Props

| Prop           | Type                | Default     | Description                                                                                    |
| -------------- | ------------------- | ----------- | ---------------------------------------------------------------------------------------------- |
| showNav        | `boolean`           | `false`     | Controls whether the side navigation is open or closed                                         |
| onHideNav      | `() => void`        | -           | Callback function triggered when the navigation closes                                         |
| onShowNav      | `() => void`        | -           | Callback function triggered when the navigation opens                                          |
| openFromRight  | `boolean`           | `false`     | Opens navigation from the right side instead of left                                           |
| style          | `CSSProperties`     | -           | Custom styles for the root container element                                                   |
| navStyle       | `CSSProperties`     | -           | Custom styles for the navigation panel                                                         |
| titleStyle     | `CSSProperties`     | -           | Custom styles for the title element                                                            |
| itemStyle      | `CSSProperties`     | -           | Custom styles for navigation items                                                             |
| itemHoverStyle | `CSSProperties`     | -           | Custom styles for navigation items on hover                                                    |
| title          | `ReactNode`         | -           | Content to display at the top of the navigation                                                |
| items          | `ReactNode[]`       | -           | Array of navigation items                                                                      |
| children       | `ReactNode`         | -           | Custom content for the navigation. When provided, `title` and `items` props are ignored       |

## Examples

### Basic Usage

```tsx
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
      />
    </>
  );
};
```

### With Custom Styles

```tsx
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Hello World"
        items={['home', 'services', 'about', 'contact']}
        titleStyle={{ backgroundColor: '#4CAF50' }}
        itemStyle={{ backgroundColor: '#fff' }}
        itemHoverStyle={{ backgroundColor: '#CDDC39' }}
      />
    </>
  );
};
```

### With Custom Items

```tsx
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  const navItems = [
    <a key="1" href="/home">Home</a>,
    <a key="2" href="/about">About</a>,
    <a key="3" href="/contact">Contact</a>,
  ];

  return (
    <>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title={<h2>Navigation</h2>}
        items={navItems}
      />
    </>
  );
};
```

### Open From Right

```tsx
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        openFromRight={true}
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
        title="Right Side Menu"
        items={['Item1', 'Item2', 'Item3']}
      />
    </>
  );
};
```

### With Custom Children

```tsx
import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const MyComponent: React.FC = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <MenuIcon onClick={() => setShowNav(true)} />
      <SideNav
        showNav={showNav}
        onHideNav={() => setShowNav(false)}
      >
        <div style={{ padding: '20px' }}>
          <h2>Custom Content</h2>
          <p>You can put any React components here!</p>
          <button onClick={() => setShowNav(false)}>Close</button>
        </div>
      </SideNav>
    </>
  );
};
```

## TypeScript Support

This package is written in TypeScript and includes type definitions. All props are fully typed:

```tsx
import type { SideNavProps, MenuIconProps } from 'react-simple-sidenav';
```


## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Setup

```bash
# Clone the repository
git clone https://github.com/gauravchl/react-simple-sidenav.git
cd react-simple-sidenav

# Install dependencies with bun
bun install

# Build library first (required before running demo)
bun run build

# Start development server for demo
# Note: The demo imports from dist/, so rebuild after source changes
bun run dev

# Build demo for production
bun run build:demo
```

**Development Workflow:**
1. Make changes to `src/index.tsx`
2. Run `bun run build` to rebuild the library
3. The demo will hot-reload and pick up the changes

## License

MIT © [Gaurav Chikhale](https://github.com/gauravchl)

## Credits

Inspired by [Side Navigation Bar TL;DW episode of Supercharged](https://youtu.be/Mhnj3PiPnZw)
