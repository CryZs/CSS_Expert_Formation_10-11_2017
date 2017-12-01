const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractScss = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});


const webpack = require('webpack');
const BannerPlugin = new webpack.BannerPlugin({
  banner: "COPYRIGHT REMY VAST 2017",
});


module.exports = {
  entry: './src/js/main',
  output: {
    path: __dirname + '/dist',
    filename: "[name].[hash].js",
  },
  /* SOURCE DEBUG - Ajout .map file */
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [['env', {
            targets: "last 2 versions, ie 10",
            modules: false,
          }]],
        }
      }
    },
      {
        test: /\.scss$/,
        use: extractScss.extract({
          use: [{
            loader: "css-loader"
          }, {
            loader: "sass-loader"
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      }]
  },
  plugins: [
    // new UglifyJsPlugin({
    //   uglifyOptions: {
    //     mangle: false,
    //   }
    // }),
    extractScss,
    new HtmlWebpackPlugin({
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
      }
    }),
    BannerPlugin,
  ]
};
