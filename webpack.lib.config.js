const path = require('path');
var webpack = require('webpack');

const definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(process.env.NODE_ENV !== 'production')
})

module.exports = {
    mode : 'production',
    entry: path.join(__dirname, "/src/index.js"),
    output: {
      filename: "index.js",
      libraryTarget: 'commonjs2',
      path: path.join(__dirname),
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
        ]
    },
    plugins: [definePlugin],
    resolve: {
        extensions: [".js", ".jsx"]
    },
};
