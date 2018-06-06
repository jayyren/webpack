module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  // modules: {
  //   rules: [
  //     {
  //       test: /\.css$/,
  //       loader: 'style-loader!css-loader?modules'
  //     }
  //   ]
  // }
}