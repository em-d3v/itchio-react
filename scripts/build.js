#! /usr/bin/env node
//set build env
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';
const webpackConfig = require("../config/webpack.config");
const webpack = require("webpack");
const chalk = require("react-dev-utils/chalk");
const formatter = require("react-dev-utils/eslintFormatter")

const compiler = webpack(webpackConfig);
// console.log(webpackConfig);
