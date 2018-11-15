const path = require('path');
const TSLintPlugin = require('tslint-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: './src/client/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new TSLintPlugin({
      files: ['./src/**/*/*.ts']
    })
  ],
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM'
  },
  devServer: {
      proxy: {
          '/api': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              pathRewrite: {'^/api' : ''},
              secure: false
          }
      }
  }
}