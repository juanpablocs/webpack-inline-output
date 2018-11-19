var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
 
module.exports = {
  context: __dirname,
  entry: './app.js',
  mode: 'production',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          'style-loader',
         { loader: 'css-loader', options: { minimize: true }},
         'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inlineSource: '.(js|css)$',
      template: './index.html'
    }),
    new HtmlWebpackInlineSourcePlugin()
  ]
};