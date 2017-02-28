// var path = require('path');
var webpack = require("webpack");
var CompressionPlugin = require('compression-webpack-plugin');

module.exports = {  
    entry: "./frontend/app/app.module.js",
    output: {
        path: "./frontend/assets/js/",
        filename: "bundle.js",
        sourceMapFilename: "bundle.js.map",
    },

    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    // eslint config
    // eslint: {
    //   configFile: './config/eslint.json'
    // },
  plugins: [
    // new webpack.DefinePlugin({ 
    //   'process.env': {
    //     'NODE_ENV': JSON.stringify('production')
    //   }
    // }),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.AggressiveMergingPlugin(),
    new CompressionPlugin({  
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],

    module: {
        // preLoaders: [{
        //     test: /\.js$/,
        //     exclude: /node_modules/,
        //     loader: "eslint-loader"
        // }],
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            { test: /\.css$/, loader: "css-loader" },
            //{ test: /\.html$/, loader: "mustache-loader" },
            { test: /\.json$/, loader: "json-loader" },
            ]
        },
    resolve: {
        extensions: ['*', '.js'],
        alias: {
          'angular': './assets/js/bundle.js',
      }


    }
};
