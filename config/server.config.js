
const fs = require('fs');
const path = require('path');
const url = require('url');
const chalk = require("react-dev-utils/chalk");

function prepare(prot,host,port,pathname='/'){
  const formated = hostname =>url.format(
    {prot,hostname,port,pathname}
  )
}
const serverConfig = ()=>{

}
module.exports=serverConfig;