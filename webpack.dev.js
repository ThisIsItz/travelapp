const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
      libraryTarget: 'var',
      library: 'Client'
    },
    devServer: {
      proxy: {
        '/': 'http://localhost:3000'
      }
    },
    module: {
        rules: [
          {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
          },
          {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
          }
        ],



    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html"
        })
    ]
}