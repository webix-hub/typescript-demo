var path = require('path');
var pkg = require("./package.json");

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var LiveReloadPlugin = require('webpack-livereload-plugin');

var config = {
  entry: {
    "app": pkg.app.replace(".js", ".ts")
  },
  
  output: {
    path: path.join(__dirname, 'codebase'),
    publicPath:"/codebase/",
    filename: '[name].js'
  },
  devtool: 'source-map',
  module: {
    rules:[
       {
        test: /\.(png|jpg|gif)$/,
        use: 'url-loader?limit=25000'
      },

      {
        test: /\.less/,
        use: ExtractTextPlugin.extract({
          use: [
            "css-loader",
            "less-loader"
          ]
        })
      },
      {
        test: /\.ts?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ["./sources", "node_modules"]
  },
  plugins: [
    new ExtractTextPlugin("./app.css"),
    new LiveReloadPlugin()
  ]
};

module.exports = config;