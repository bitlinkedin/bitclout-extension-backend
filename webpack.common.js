/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist/client'),
    publicPath: '/',
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: 'client/assets', to: 'assets' },
      ],
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.html',
      inject: 'body',
      chunks: ['index'],
    }),
    new CleanWebpackPlugin({
      dangerouslyAllowCleanPatternsOutsideProject: true,
      verbose: true,
      cleanStaleWebpackAssets: true,
    }),
    new MiniCssExtractPlugin(),
  ],
  entry: {
    index: path.join(__dirname, 'client/index.tsx'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.css', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-transform-react-display-name',
            ],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                // If you are using less-loader@5 please spread the lessOptions to options directly
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'assets/',
              publicPath: '/static/assets/',
            },
          },
        ],
      },
    ],
  },
};
