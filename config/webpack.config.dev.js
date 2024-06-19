const webpack = require('webpack');
const reactConfig = require("react-scripts/config/webpack.config");
const path = require("path")

let config = reactConfig(process.env.NODE_ENV);
// console.log(config);
let webpackConfigDev = {
  mode: 'development',
  devtool: "source-map",
  entry: {

  },
  target: 'node',
  output: {
    path: path.resolve(__dirname,'..',"build"),
    filename:"src/js/[name].bundle.js"
  },
  plugins:[
   new webpack.HotModuleReplacementPlugin(),
    new  webpack.NoEmitOnErrorsPlugin()
  ],
  devServer:{
    hot:true,
    static: [
      path.join(__dirname,'..','build')
    ]
  },
  resolve:{

  }
}

// module.exports = {config,webpackConfigDev}
module.exports = config;