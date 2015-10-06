var webpack = require('webpack'); 
module.exports = {  
    eslint: {
      configFile: '.eslintrc',
      quiet: true
    },
    entry: {
      user:[
        'webpack/hot/only-dev-server',
        "./js/app.js"
      ]
    },
    output: {
        path: __dirname + '/build',
        filename: "[name].bundle.js",
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel', 'flowcheck'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: ['babel-loader'], query: {stage: 0}},
            { test: /\.css$/, loader: "style!css" },
            { test: /\.json$/, loader: "json" }
        ]
    },
    plugins: [
      new webpack.NoErrorsPlugin(),
    ],
    devServer: {
      historyApiFallback: true
    }

};
