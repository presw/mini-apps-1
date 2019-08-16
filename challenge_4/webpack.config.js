const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  mode: 'development',
  entry: __dirname + '/client/index.jsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'public/dist')
  }
};
