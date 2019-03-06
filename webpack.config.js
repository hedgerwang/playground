/* eslint-disable */

var webpack = require("webpack"),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    CopyWebpackPlugin = require("copy-webpack-plugin"),
    FlowWebpackPlugin = require('flow-webpack-plugin'),
    HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin'),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    WriteFilePlugin = require("write-file-webpack-plugin");
    env = require("./utils/env"),
    fileSystem = require("fs"),
    path = require("path");

var isDev = env.NODE_ENV === "development" || 0;
// isDev = false;

var options = {
  entry: {
    game: path.join(__dirname, "src", "game.js"),
  },
  output: {
    path: path.join(__dirname, "bin"),
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', ['es2015', {'modules': false}]],
          plugins: ['transform-class-properties'],
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.html$/,
        loader: "html-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {}
  },
  plugins: [
    new FlowWebpackPlugin(),
    // clean the web folder
    new CleanWebpackPlugin(["bin"]),
    // expose and write the allowed env vars on the compiled bundle
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(env.NODE_ENV)
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      filename: "index.html",
      chunks: ["game"],
      inlineSource: isDev ? '$^' : '.(js|css)$'
    }),
    new HtmlWebpackInlineSourcePlugin(),
    new WriteFilePlugin(),
    new CopyWebpackPlugin([
      'src/images/p1.png',
    ]),

  ]
};

if (env.NODE_ENV === "development") {
  options.devtool = "cheap-module-eval-source-map";
} else {
  options.plugins.push(new UglifyJsPlugin());
}

module.exports = options;
