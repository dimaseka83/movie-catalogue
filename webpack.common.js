const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function (config) {
  config.set({
    entry: {
      app: path.resolve(__dirname, 'src/scripts/index.js'),
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'style-loader',
            },
            {
              loader: 'css-loader',
            },
          ],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: path.resolve(__dirname, 'src/templates/index.html'),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/public/'),
            to: path.resolve(__dirname, 'dist/'),
          },
        ],
      }),
      new Dotenv({
        path: path.resolve(__dirname, '.env'),
        systemvars: true,
        safe: true,
      }),
    ],
    webpack: {
      devtool: 'inline-source-map',
      mode: 'development',
      plugins: [
        new Dotenv({
          path: path.resolve(__dirname, '.env'),
          systemvars: true,
          safe: true,
        }),
      ],
    },
    webpackMiddleware: {
      stats: 'errors-only',
    },
  });
};
