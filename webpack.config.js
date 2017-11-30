const webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './bundle.js',
  },
  
  devServer: {
    contentBase: './',
    port: 3000,
    compress: true,
    hot: true,
    inline: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
}
