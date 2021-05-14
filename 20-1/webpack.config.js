const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunkhash].js',
        path: path.resolve(__dirname, 'build')
    },
    plugins: [
        new HTMLWebpackPlugin ({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTMLWebpackPlugin ({
            filename: 'sign-in.html',
            template: './src/templates/sign-in.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [ 'css-loader', 'style-loader', 'sass-loader' ]
            }
        ]
    },
    devServer: {
        port: 4200
    }
}
