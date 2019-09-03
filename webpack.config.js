const path = require("path");
const WebpackHtmlPlugin = require("webpack-html-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/js/"
    },
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        index: 'index.html',
        port: 9000,
    },
    module: {
        rules: [
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
            }
        ]
    },
    plugins: [
        new WebpackHtmlPlugin({
            title: 'Chatnator',
            description: 'Simple chat interface',
            template: 'src/base-template.hbs',
        })
    ]
};