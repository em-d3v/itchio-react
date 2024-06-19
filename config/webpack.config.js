/**
 * @description      :
 * @author           : em-d3v
 * @group            :
 * @created          : 16/06/2024 - 17:12:44
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/06/2024
 * - Author          : em-d3v
 * - Modification    :
 **/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
/**
 * @typedef {import('webpack')}  webpack
 */

const envConfig = process.env.NODE_ENV === 'production' ? require('./webpack.config.prod') : require('./webpack.config.dev');
/**
 *
 *  my config
 */
let config = {
  mode: envConfig.mode,
  entry: path.resolve(process.cwd(), 'src/index.js'),
  // stats: 'errors-warnings',
  stats: {
    errorCode: true,
    errors: true,
  },
  output: {
    path: path.resolve(process.cwd(), 'build'),
    filename: 'src/js/[name].js',
    assetModuleFilename: '[path][name][ext]',
    publicPath: '/',
  },
  cache: envConfig.config,
  infrastructureLogging: { level: 'none' },
  optimization: envConfig.optimization,
  module: envConfig.module,
  resolve: envConfig.resolve,
  plugins: [
    ...envConfig.plugins,
  ],
  devServer: {
    devMiddleware: {
      index: true,
    },
    hot: true,
    open: false,
    server: 'http',
    compress: true,
    liveReload: true,
    port: 5500,
    host: 'localhost',
    static: {
      directory: path.join(process.cwd(), 'public'),
    },
    watchFiles: ['src/**/*', 'public/**/*'],
  },
};
// if (process.env.NODE_ENV === 'development') {
//   config.devServer = envConfig.devServer;
//   config.devServer.port = 5500;
//   config.devServer.hostname = "localhost";
//   config.devServer.protocol = "http";
//   config.devServer.path = "/";
//
// }
// console.log("my config: ",config);
let webpackConfig = {
  entry: {
    main: ['src/App.js', 'src/index.js'],
    components: [
      'src/components/Player.jsx',
    ],
    gui: [
      'src/components/gui',
    ],
  },
  output: {
    path: './build',
    filename: 'js/[name].min.js',
    assetModuleFilename: '',
  },
  module: {
    rules: [],
  },
};
module.exports= config;
