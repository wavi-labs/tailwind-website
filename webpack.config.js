const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

function makeNewHtmlWebpackPlugins (numberOfPosts) {
  for (i = 1; i <= numberOfPosts; i++) {
    return new HtmlWebpackPlugin ({
      template: './dist/blog-posts/' + i + '.html',
      inject: true,
      chunks: ['index'],
      filename: './dist/blog-posts/' + i + '.html'
    })
  }
}

module.exports = {
  entry: {
    index: './src/index.js',
    blog: './src/blog.js',
    services: './src/services.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          },
          {
            loader: 'postcss-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, 'dist'),
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './dist/indexT.html',
      inject: true,
      chunks: ['index'],
      filename: './dist/indexT.html'
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.html',
      inject: true,
      chunks: ['index'],
      filename: './dist/index.html'
    }),
    new HtmlWebpackPlugin({
      template: './dist/blog.html',
      inject: true,
      chunks: ['index'],
      filename: './dist/blog.html'
    }),
    new HtmlWebpackPlugin({
      template: './dist/blogT.html',
      inject: true,
      chunks: ['index'],
      filename: './dist/blogT.html'
    }),
    new HtmlWebpackPlugin({
      template: './dist/services.html',
      injrcy: true,
      chunks: ['index'],
      filename: './dist/services.html'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ].concat(makeNewHtmlWebpackPlugins(1))
}
