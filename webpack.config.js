var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './src/main.jsx',
     output: {
         path: path.resolve(__dirname, 'dist'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js(x)$/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2015', 'react']
                 }
             }
         ]
     },
     stats: {
         colors: true
     },
 };