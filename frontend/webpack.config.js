// var path = require('path');
module.exports = {  
    entry: "./app/app.module.js",
    output: {
        path: "./assets/js/",
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
        extensions: ['', '.js'],
        alias: {
          'angular': './assets/js/bundle.js',
      }


    }
};
