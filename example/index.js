

var Layout = React.createClass({
  displayName: 'Layout',
  getInitialState: function getInitialState() {
    return {
      showNav: false
    };
  },
  getSideNavContent: function getSideNavContent() {
    var styles = {
      title: {
        background: '#E91E63',
        color: '#fff',
        fontWeight: 400,
        margin: 0,
        lineHeight: '82px',
        padding: 22
      },
      li: {
        padding: 22,
        cursor: 'pointer'
      }
    };

    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        { style: styles.title },
        'Simple SideNav'
      ),
      React.createElement(
        'ul',
        null,
        React.createElement(
          'li',
          { style: styles.li },
          'Item 1'
        ),
        React.createElement(
          'li',
          { style: styles.li },
          'Item 2'
        )
      )
    );
  },
  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        { style: { width: '100%', background: "#0AC" } },
        React.createElement(
          'div',
          { style: { padding: 14 }, onClick: function onClick() {
              return _this.setState({ showNav: !_this.state.showNav });
            } },
          React.createElement(
            'svg',
            { xmlns: 'http://www.w3.org/2000/svg', cursor: 'pointer', fill: '#fff', height: '24', viewBox: '0 0 24 24', width: '24' },
            React.createElement('path', { d: 'M0 0h24v24H0z', fill: 'none' }),
            React.createElement('path', { d: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z' })
          )
        )
      ),
      React.createElement(
        SideNav,
        { showNav: this.state.showNav, onHideNav: function onHideNav() {
            return _this.setState({ showNav: false });
          } },
        this.getSideNavContent()
      )
    );
  }
});
ReactDOM.render(
  React.createElement(Layout, null, null),
  document.getElementById('example')
);
