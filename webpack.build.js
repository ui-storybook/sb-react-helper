const path = require('path');
const webpack = require('webpack');

module.exports = {
    // devtool: '#cheap-module-source-map',
    entry: './src/helper',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    externals: {
        react: "React"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            }
        ],
    }
};