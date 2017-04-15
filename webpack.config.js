var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

var config = {
  entry: {
    "app":'./sources/app'
  },
  output: {
    path: path.join(__dirname, 'codebase'),
    publicPath:"/codebase/",
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.less/,
        loader: ExtractTextPlugin.extract(
            "css!less?relativeUrls&noIeCompat"
        )
      },  
      {
        test: /\.ts$/,
        loader: 'awesome-typescript'
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.js'],
    modulesDirectories: ["./sources", "node_modules"]
  },
  plugins: [
    new ExtractTextPlugin("./app.css"),
    new LiveReloadPlugin()
  ]
};

module.exports = config;