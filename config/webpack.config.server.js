const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    target: 'node',
    mode: "development",
    entry: {
        server: './src/server/index'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [
        // new CleanWebpackPlugin(),
    ]
}