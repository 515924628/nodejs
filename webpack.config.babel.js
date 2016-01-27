//import * as webpack from "webpack";
var webpack = require("webpack");

let commonsPlugin = new webpack.optimize.CommonsChunkPlugin("common.js");
let uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}});

export default {
	entry: {
		//main: "./src/main.js"
		ajax: "./src/public/javascripts/ajax.js"
	},
	plugins: [
		//commonsPlugin
		//,uglifyJsPlugin
	],
	output: {
		path: "public/javascripts",
		filename: "[name].js"
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: "babel"
				//}, {
				//	test: /\.css$/,
				//	loader: "style!css"
			}, {
				test: /\.vue$/,
				loader: "vue"
			}
		]
	}
};
