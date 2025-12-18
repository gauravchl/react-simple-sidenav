import React, { useState } from 'react';
import SideNav, { MenuIcon } from 'react-simple-sidenav';

const Layout: React.FC = () => {
  const [showNav1, setShowNav1] = useState(false);
  const [showNav2, setShowNav2] = useState(false);
  const [showNav3, setShowNav3] = useState(false);
  const [showNav4, setShowNav4] = useState(false);

  return (
    <div className="min-h-screen pb-10">

      {/* Hero Section */}
      <div className="text-center py-12 px-5 max-w-4xl mx-auto">
        <h1 className="text-6xl font-extrabold mb-4 text-gradient">
          React Simple SideNav
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          A lightweight, customizable side navigation component for React
        </p>

        {/* GitHub Link */}
        <div className="mb-8">
          <a
            href="https://github.com/gauravchl/react-simple-sidenav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-2 text-sm"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>

        {/* Badges */}
        <div className="flex gap-2 justify-center flex-wrap mb-8">
          <img src="https://img.shields.io/npm/v/react-simple-sidenav.svg?style=flat-square" alt="npm version" className="h-5" />
          <img src="https://img.shields.io/npm/dm/react-simple-sidenav.svg?style=flat-square" alt="npm downloads" className="h-5" />
          <img src="https://img.shields.io/bundlephobia/minzip/react-simple-sidenav?style=flat-square" alt="bundle size" className="h-5" />
          <img src="https://img.shields.io/github/stars/gauravchl/react-simple-sidenav?style=flat-square" alt="GitHub stars" className="h-5" />
        </div>

        {/* Feature Pills */}
        <div className="flex gap-3 justify-center flex-wrap">
          <span className="bg-white text-gray-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md">
            ⚡️ 1.45 kB gzipped
          </span>
          <span className="bg-white text-gray-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md">
            🎨 Customizable
          </span>
          <span className="bg-white text-gray-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md">
            📱 Touch-friendly
          </span>
          <span className="bg-white text-gray-600 px-5 py-2.5 rounded-full text-sm font-semibold shadow-md">
            🔧 TypeScript
          </span>
        </div>
      </div>

      {/* Examples Grid */}
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Example 1 */}
        <div className="example-box">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold py-5 px-6 flex items-center gap-3">
            <div className="ripple">
              <MenuIcon className="cursor-pointer" onClick={() => setShowNav1(true)} />
            </div>
            <span>Default Styles</span>
          </div>
          <div className="bg-gray-50 p-6 max-h-80 overflow-auto border-t border-gray-200">
            <code className="text-sm font-mono text-gray-800 leading-relaxed whitespace-pre">
              {example1}
            </code>
          </div>
        </div>

        {/* Example 2 */}
        <div className="example-box">
          <div className="bg-gradient-to-r from-cyan-400 to-blue-400 text-white font-semibold py-5 px-6 flex items-center gap-3">
            <div className="ripple delay-1">
              <MenuIcon className="cursor-pointer" onClick={() => setShowNav2(true)} />
            </div>
            <span>Custom Styles</span>
          </div>
          <div className="bg-gray-50 p-6 max-h-80 overflow-auto border-t border-gray-200">
            <code className="text-sm font-mono text-gray-800 leading-relaxed whitespace-pre">
              {example2}
            </code>
          </div>
        </div>

        {/* Example 3 */}
        <div className="example-box">
          <div className="bg-gradient-to-r from-pink-400 to-yellow-400 text-white font-semibold py-5 px-6 flex items-center gap-3">
            <div className="ripple delay-2">
              <MenuIcon className="cursor-pointer" onClick={() => setShowNav3(true)} />
            </div>
            <span>Custom Items</span>
          </div>
          <div className="bg-gray-50 p-6 max-h-80 overflow-auto border-t border-gray-200">
            <code className="text-sm font-mono text-gray-800 leading-relaxed whitespace-pre">
              {example3}
            </code>
          </div>
        </div>

        {/* Example 4 */}
        <div className="example-box">
          <div className="bg-gradient-to-r from-teal-400 to-indigo-900 text-white font-semibold py-5 px-6 flex items-center gap-3">
            <div className="ripple">
              <MenuIcon className="cursor-pointer" onClick={() => setShowNav4(true)} />
            </div>
            <span>Open From Right</span>
          </div>
          <div className="bg-gray-50 p-6 max-h-80 overflow-auto border-t border-gray-200">
            <code className="text-sm font-mono text-gray-800 leading-relaxed whitespace-pre">
              {example4}
            </code>
          </div>
        </div>
      </div>

      {/* SideNav Components */}
      <SideNav
        showNav={showNav1}
        onShowNav={() => console.log('onShowNav')}
        onHideNav={() => setShowNav1(false)}
      />

      <SideNav
        showNav={showNav2}
        onHideNav={() => setShowNav2(false)}
        title="Hello World"
        titleStyle={{ backgroundColor: '#4CAF50' }}
        items={['home', 'services', 'about', 'contact']}
        itemStyle={{ backgroundColor: '#fff' }}
        itemHoverStyle={{ backgroundColor: '#CDDC39' }}
      />

      <SideNav
        showNav={showNav3}
        onHideNav={() => setShowNav3(false)}
        title={
          <div>
            Hello octo <img src="git-mark.png" width="26" alt="Octocat" />
          </div>
        }
        titleStyle={{ backgroundColor: '#2196F3' }}
        items={[
          <a key="github" target="_blank" rel="noopener noreferrer" href="https://github.com/gauravchl/react-simple-sidenav">
            View Source on github
          </a>,
          <a key="npm" target="_blank" rel="noopener noreferrer" href="https://www.npmjs.com/package/react-simple-sidenav">
            Install via npm
          </a>,
          <a key="demo" target="_blank" rel="noopener noreferrer" href="https://gauravchl.github.io/react-simple-sidenav/example">
            demo
          </a>,
        ]}
      />

      <SideNav
        openFromRight={true}
        showNav={showNav4}
        onHideNav={() => setShowNav4(false)}
        title="Open From right"
        titleStyle={{ backgroundColor: '#FF5722' }}
        items={['Item1', 'Item2', 'Item3']}
      />
    </div>
  );
};

export default Layout;

const example1 = `
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
`;

const example2 = `
  <SideNav
    showNav={showNav}
    onHideNav={() => setShowNav(false)}
    title="Hello World"
    items={['home', 'services', 'about', 'contact']}
    titleStyle={{ backgroundColor: '#4CAF50' }}
    itemStyle={{ backgroundColor: '#fff' }}
    itemHoverStyle={{ backgroundColor: '#CDDC39' }}
  />
`;

const example3 = `
  <SideNav
    showNav={showNav3}
    onHideNav={() => setShowNav3(false)}
    title={<div>Hello octo <img src='git-mark.png' width='26' alt='Octocat' /></div>}
    titleStyle={{ backgroundColor: '#2196F3' }}
    items={[
      <a key='github' target='_blank' rel='noopener noreferrer'
         href='https://github.com/gauravchl/react-simple-sidenav'>
        View Source on github
      </a>,
      <a key='npm' target='_blank' rel='noopener noreferrer'
         href='https://www.npmjs.com/package/react-simple-sidenav'>
        Install via npm
      </a>,
      <a key='demo' target='_blank' rel='noopener noreferrer'
         href='https://gauravchl.github.io/react-simple-sidenav/example'>
        demo
      </a>
    ]}
  />
`;

const example4 = `
  <SideNav
    openFromRight={true}
    showNav={showNav4}
    onHideNav={() => setShowNav4(false)}
    title='Open From right'
    titleStyle={{ backgroundColor: '#FF5722' }}
    items={['Item1', 'Item2', 'Item3']}
  />
`;
