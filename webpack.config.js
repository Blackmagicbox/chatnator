const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "../dist"),
        filename: "bundle.js",
        publicPath: ""
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, "../dist"),
        index: 'index.html',
        port: 9000,
    },
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    'style-loader', 'css-loader', 'sass-loader',
                ]
            },
            {
                test: /\.js$/,
                exclude: "/node_modules/",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-flow']
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: [
                    "handlebars-loader"
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Chatnator',
            description: 'Simple chat interface',
            template: 'src/base-template.hbs',
        })
    ]
};