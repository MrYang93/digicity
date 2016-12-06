var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack/hot/dev-server',
    path.resolve(__dirname, 'src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  devServer: {
    publicPath: "/build/",
    port: 3000,
    inline: true,
    hot:true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    extensions: ["", ".js", ".jsx"]
  },
  module: {
    loaders: [
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
}
