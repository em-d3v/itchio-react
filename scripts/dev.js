#! /usr/bin/env node
//set build env
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';
const webDevServer = require("webpack-dev-server");
const webpack = require("webpack")
const webpackConfig = require("../config/webpack.config");
const chalk = require("react-dev-utils/chalk");
const formatter = require("react-dev-utils/eslintFormatter")
const pkg = require('../package.json');




const compiler = webpack(webpackConfig);
const sv = webpackConfig.devServer;
// console.log(chalk.cyan("Server Config: "),serverConfig)
//start
console.log(chalk.green("Development Script Executed!"))
console.log(chalk.cyan("Starting Server"));
let server;
try{
  server = new webDevServer(sv, compiler);
}catch (e) {
  console.log(e);
}

const serverUrl = `${sv.server}://${sv.host}:${sv.port}/`
server.startCallback((err)=>{
  if (err) throw err;
  console.log(chalk.green("Successfully Started Server"));
  console.log(chalk.yellow("local: ",serverUrl));
  console.log(chalk.yellow("network: ",`http://127.0.0.1:${sv.port}/`));
})
