const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    // gets overwritten by --mode development/production of npm start command
    mode: 'development',

    // entry: [path.resolve(__dirname, 'src', 'js', 'index.js')],
    entry: {
      'client/index': path.resolve(__dirname, 'src', 'client', 'js', 'index.js'),
      'server/index': path.resolve(__dirname, 'src', 'server', 'index.js')
    },

    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    
    optimization: {
        minimizer: [
            // uglify only kicks in when mode = production
            new UglifyJsPlugin({
                parallel: true
            })
        ],
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'client', 'index.html'),
            meta: {
                viewport: 'width=device-width, initial-scale=1.0',
            }
        })
    ]
}