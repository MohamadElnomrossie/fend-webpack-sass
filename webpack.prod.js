const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const common=require('./webpack.common')
const {merge}=require('webpack-merge')
module.exports = merge(common,{
    
 mode: 'production',
  
})
