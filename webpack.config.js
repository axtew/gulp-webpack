const webpack = require('webpack'),
      uglifyJS = require('uglifyjs-webpack-plugin');

const config = {
    output: {
        filename: 'bandle.js'
    },
    plugins: [
        new uglifyJS({
            sourceMap: true
        })
    ]
};

module.exports = config;