const path = require('path');

module.exports = {
  entry: './index.js',
  mode: process.env.NODE_ENV,
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', 
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  },
  devServer: {
    publicPath: '/build',
    proxy: {
      'src/api': 'http://localhost:3000',
    },
    // port: 3000
  }
}