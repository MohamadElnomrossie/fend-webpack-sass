const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const common=require('./webpack.common')
const {merge}=require('webpack-merge')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = merge(common,{
    
 mode: 'production',
 optimization:{
     minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
 },
    module:{
        rules:[
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader","sass-loader"]
            },
        ],
    },
        plugins:[new MiniCssExtractPlugin({filename:'[name].css'})]

})
