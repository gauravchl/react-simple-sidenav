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
    loaders: [
      {
        test: /.jsx?$/,
        include: SRC_DIR,
        loader: 'babel',
        exclude: /node_modules/,
      },
    ],
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
    loaders: [
      {
        test: /.jsx?$/,
        include: [
          DEMO_DIR + '/src',
          SRC_DIR,
        ],
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },

}

module.exports = [config, demoConfig];
