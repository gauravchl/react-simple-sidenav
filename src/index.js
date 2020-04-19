import React, { useRef } from 'react';

const SideNav = (props) => {
  const {
    style,
    navStyle,
    titleStyle,
    itemStyle,
    itemHoverStyle,
    title,
    children,
    items,
    showNav,
    openFromRight,
    onHideNav,
  } = props;

  const navEle = useRef();
  let startX;
  let currentX;
  let touchingSideNav;

  const hideNav = () => {
    onHideNav && onHideNav();
  };

  const onTouchStart = (e) => {
    startX = currentX = e.touches[0].pageX;
    touchingSideNav = true;
    requestAnimationFrame(update);
  };

  const onTouchMove = (e) => {
    if (!touchingSideNav) return;
    currentX = e.touches[0].pageX;
  };

  const onTouchEnd = (evt) => {
    if (!touchingSideNav) return;
    touchingSideNav = false;
    const translateX = Math[openFromRight ? 'max' : 'min'](0, currentX - startX);
    navEle.current.style.transform = '';
    if (!openFromRight && translateX < 0) hideNav();
    if (openFromRight && translateX > 0) hideNav();
  };

  const update = () => {
    if (!touchingSideNav) return;
    requestAnimationFrame(update);
    const translateX = Math[openFromRight ? 'max' : 'min'](0, currentX - startX);
    navEle.current.style.transform = `translateX(${translateX}px)`;
  };

  const getDefaultContent = () => {
    let styles = {
      title: {
        background: '#E91E63',
        color: '#fff',
        fontWeight: 400,
        margin: 0,
        lineHeight: '82px',
        padding: 22,
        ...(titleStyle || {}),
      },
      li: {
        padding: 22,
        cursor: 'pointer',
        backgroundColor: '#fff',
        ...(itemStyle || {}),
      },
    };

    let handleItemHover = (e, enter) => {
      const ele = e.currentTarget;
      ele.style = { ...ele.style, ...styles.li };
      if (enter) {
        ele.style = { ...ele.style, ...(itemHoverStyle || { backgroundColor: '#f5f5f5' }) };
      }
    };

    return (
      <div>
        <h1 style={styles.title}>{title || 'Simple SideNav'}</h1>
        <ul>
          {items ? (
            items.map((item, key) => (
              <li
                key={'item' + key}
                style={styles.li}
                onMouseOver={(e) => handleItemHover(e, true)}
                onMouseOut={(e) => handleItemHover(e, false)}
              >
                {item}
              </li>
            ))
          ) : (
            <li key="item1" style={styles.li}>
              Item 1
            </li>
          )}
        </ul>
      </div>
    );
  };

  const styles = {
    root: {
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
      position: 'fixed',
      overflow: 'hidden',
      zIndex: 8,
      pointerEvents: showNav ? 'auto' : 'none',
      ...(style || {}),
    },
    nav: {
      position: 'relative',
      width: '90%',
      maxWidth: 400,
      height: '100%',
      background: '#FFF',
      boxShadow: '2px 0 12px rgba(0,0,0,0.4)',
      transform: showNav ? 'none' : `translateX(${openFromRight ? 102 : -102}%)`,
      transition: `transform ${showNav ? '0.33s' : '0.13s'} cubic-bezier(0,0,0.3,1)`,
      display: 'flex',
      willChange: 'transform',
      flexDirection: 'column',
      float: openFromRight ? 'right' : 'left',
      ...(navStyle || {}),
    },
    overlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      opacity: showNav ? 1 : 0,
      background: 'rgba(0,0,0,0.4)',
      transition: 'opacity 0.3s cubic-bezier(0, 0, 0.3, 1)',
      willChange: 'opacity',
    },
  };

  return (
    <aside style={styles.root}>
      <div style={styles.overlay} onClick={hideNav}></div>
      <nav
        style={styles.nav}
        onTransitionEnd={(e) => {
          e.target.style.transition = 'none';
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        ref={navEle}
      >
        {children || getDefaultContent()}
      </nav>
    </aside>
  );
};

const MenuIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    cursor="pointer"
    fill="#fff"
    height="24"
    viewBox="0 0 24 24"
    width="24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
);

export { SideNav, MenuIcon };
export default SideNav;
