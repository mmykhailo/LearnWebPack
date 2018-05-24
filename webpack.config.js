let path = require('path');

let conf = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer:{
        overlay: true
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }],
            },
            {
                test: /\.scss$/,
                use: [

                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ]
            }
        ]
    }
};

module.exports = (env, options) => {
 let production = options.mode === 'production';
 conf.devtool = production ? false : 'eval-sourcemap';
 return conf;
};