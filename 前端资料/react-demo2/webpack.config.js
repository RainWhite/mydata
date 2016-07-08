/**
 * Created by ruluo1992 on 16-5-9.
 */
var path = require('path');
var webpack = require('webpack');
module.exports = {
    entry: {
        a : ['webpack-dev-server/client?http://localhost:8080'],
        "main" : path.resolve(__dirname, './app/main.jsx')
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].bundle.js',
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
            {
                test: /\.jsx$/,
                loader: 'babel',
                include: path.join(__dirname, 'app')
            }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['', '.js', '.jsx']
    }
};