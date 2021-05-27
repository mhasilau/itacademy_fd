const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.[chunckhash].js',
        path: path.resolve(__dirname, 'build')
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html',
            favicon: './src/assets/img/htmlcssjs.png'
        }),
        new HTMLWebpackPlugin({
            filename: 'sign-in.html',
            template: './src/templates/sign-in.html',
            favicon: './src/assets/img/htmlcssjs.png'
        }),
        new HTMLWebpackPlugin({
            filename: 'sign-up.html',
            template: './src/templates/sign-up.html',
            favicon:  "./src/assets/img/htmlcssjs.png"
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
}
