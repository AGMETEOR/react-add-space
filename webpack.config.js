const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "examples/src/index.html"),
    filename: "./index.html"
});

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractTextPlugin = new ExtractTextPlugin({
  filename: 'main.css'
});
module.exports = {
    entry: path.join(__dirname, "examples/src/index.js"),
    output: {
      path: path.join(__dirname, "examples/dist"),
      filename: "bundle.js"
  },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader','eslint-loader']
            },
            {
              test: /\.scss$/,
              use: extractTextPlugin.extract({
                use: ['css-loader', 'sass-loader']
              })
            }
        ]
    },
    plugins: [htmlWebpackPlugin, extractTextPlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};
