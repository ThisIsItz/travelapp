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
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000,
      proxy: {
        '/': 'http://localhost:4000'
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