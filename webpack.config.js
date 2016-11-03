'use strict';

const {DefinePlugin, optimize: {UglifyJsPlugin, OccurenceOrderPlugin}} = require('webpack');
const distFolder = 'dist';
const path = require('path');

const config = {
    entry: './game.ts',

    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, `./${distFolder}`),
        publicPath: `/${distFolder}/`,
    },

    resolve: {
        root: __dirname,
        extensions: ['', '.webpack.js', '.web.js', '.ts', '.js'],
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
            },
        ],
    },
};

if (process.env.NODE_ENV === 'production') {
    config.devtool = '#source-map';
    config.plugins.push(...[
        new DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"',
            },
        }),
        new UglifyJsPlugin({
            compress: {
                warnings: false,
            },
        }),
        new OccurenceOrderPlugin(),
    ]);
} else {
    config.devtool = '#eval';

    config.devServer = {
        noInfo: true,
        inline: true,
        colors: true,
        historyApiFallback: true,
    };
}

module.exports = config;