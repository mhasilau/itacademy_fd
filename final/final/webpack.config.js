const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunckhash].js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'sign-in.html',
            template: './src/pages/sign-in.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'sign-up.html',
            template: './src/pages/sign-up.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'twits.html',
            template: './src/pages/twits.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'file-loader'
            },
        ]
    },
};