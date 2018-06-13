const path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// const stencil = require('@stencil/webpack');

  module.exports = {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
   module: {
     rules: [
      {
        test: /\.js/,
        loader: 'babel-loader',
        include: __dirname + '/src/app.js'
       },

       {
         test: /\.css$/,
         use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]'
              }
            }
          ]
        })
       },

       {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
                importLoaders: 2,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
          'sass-loader'
          ]
        })
      },
     ]
   },

    plugins: [
      new ExtractTextPlugin("styles.css")
    //   new stencil.StencilPlugin({
    //     collections: [

    // ]})
  ]
  };