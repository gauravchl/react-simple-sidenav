const webpack = require('webpack');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const DIST_DIR = path.resolve(__dirname, 'dist');
const SRC_DIR = path.resolve(__dirname, 'src');

const config = {
  entry: {
    'simple-sidenav': `${SRC_DIR}/SideNav.jsx`,
    demo: `${SRC_DIR}/index.js`
  },
  output: {
    path: DIST_DIR,
    filename: '[name].js',
    libraryTarget: 'var',
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], { DIST_DIR }),
    new CopyWebpackPlugin([
      { from: './public/index.html', to: './', force: true },
      { from: './public/git-mark.png', to: './', force: true },
      { from: './public/main.css', to: './', force: true },
    ]),
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(js|jsx)$/,
        include: SRC_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [require('@babel/plugin-proposal-class-properties')]
          }
        }
      }
    ]
  },
};

module.exports = (env, argv) => {
  if (argv.mode === 'development') {
    config.devtool = 'source-map';
    config.devServer = {
      contentBase: DIST_DIR,
      compress: true,
      port: 9000
    };
  }

  if (argv.mode === 'production') {
    config.optimization = {
      minimizer: [new UglifyJsPlugin({
        parallel: true,
        text: /\.(js|jsx)$/i,
        exclude: /node_modules/
      })]
    };
  }

  return config;
};
