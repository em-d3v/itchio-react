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
/**
 * @typedef {import("webpack")}  webpack
 */
import "webpack";


let webpackConfig = {
    entry: {

    },
    output:{
        path: "./build",
        filename: "js/build.min.js"
    }
}
module.exports = webpackConfig;
