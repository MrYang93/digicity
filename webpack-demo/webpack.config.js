var path = require('path');
var webpack = require('webpack');

module.exports = {
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
  ]
}
