var path = require('path');
var webpack = require('webpack');

var DIST_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var DEMO_DIR = path.resolve(__dirname, 'demo');

var config = {
  entry: SRC_DIR + '/index.jsx',
  output: {
    path: DIST_DIR,
    filename: 'simple-sidenav.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  externals: {
    react: 'react',
    'react-dom': 'react-dom',
  },
};

demoConfig = {
  entry: DEMO_DIR + '/src/index.jsx',
  output: {
    path: DEMO_DIR,
    filename: 'index.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          DEMO_DIR + '/src',
          SRC_DIR,
        ],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}

module.exports = [config, demoConfig];
