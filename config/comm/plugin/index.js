const webpack = require("webpack");
const path = require('path');
const glob = require("glob");
const htmlWebpackMaker = require('./htmlWebpackMaker')

//消除冗余的css
const purifyCssWebpack = require("purifycss-webpack");

// 清除目录等
const cleanWebpackPlugin = require("clean-webpack-plugin");
//4.x之前用以压缩
// const uglifyjsWebpackPlugin = require("uglifyjs-webpack-plugin");
// 分离css
const extractTextPlugin = require("extract-text-webpack-plugin");
//静态资源输出
const copyWebpackPlugin = require("copy-webpack-plugin");
module.exports = [
		// new webpack.HotModuleReplacementPlugin(),
		// 调用之前先清除
		
		// 4.x之前可用uglifyjs-webpack-plugin用以压缩文件，4.x可用--mode更改模式为production来压缩文件
		// new uglifyjsWebpackPlugin(),
		// new copyWebpackPlugin([{
		// 	from: path.resolve(__dirname,"src/assets"),
		// 	to: './pulic'
		// }]),
		// 分离css插件参数为提取出去的路径
		// new extractTextPlugin("css/index.css"),
		new extractTextPlugin('css/[name].css?v=[hash]'), //此处也可以根据splitChunkPlugin的chunk名字做对应
		// 消除冗余的css代码
		// new purifyCssWebpack({
		// 	// glob为扫描模块，使用其同步方法（请谨慎使用异步方法）
		// 	paths: glob.sync(path.join(__dirname, "src/*.html"))
		// }),
		// 全局暴露统一入口
		new webpack.ProvidePlugin({
			$: "jquery"
		}),
		...htmlWebpackMaker,
		// new cleanWebpackPlugin(['dist']),
		// new webpack.HotModuleReplacementPlugin()
]