const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssExtractWebpackPlugin = require('mini-css-extract-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: {
    options: './src/js/options.js',
    dashboard: './src/js/dashboard.js',
    timetracker: './src/js/timetracker.js'
  },
  output: {},
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: /src/,
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [CssExtractWebpackPlugin.loader, 'css-loader','postcss-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      filename: 'options.html',
      chunks: ['options']
    }),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      filename: 'dashboard.html',
      chunks: ['dashboard']
    }),
    new HtmlWebpackPlugin({
      template: './src/html/template.html',
      filename: 'timetracker.html',
      chunks: ['timetracker']
    }),
    new CssExtractWebpackPlugin({
      filename: 'css/bunle.css'
    })
  ],
  devServer: {},
  mode: 'development'
}
