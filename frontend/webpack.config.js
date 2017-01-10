module.exports = {  
    entry: "./app/app.js",
    output: {
        path: "./dist/js/",
        filename: "bundle.js",
        sourceMapFilename: "bundle.js.map",
    },

    watch: true,

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
            { test: /\.css$/, loader: "css-loader" },
            //{ test: /\.html$/, loader: "mustache-loader" },
            { test: /\.json$/, loader: "json-loader" },
            ]
        },
    resolve: {
        extensions: ['', '.js'],
        alias: {
          'angular': './dist/js/bundle.js',
      }


    }
};
