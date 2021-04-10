const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: "development",
    entry: {
        client: './src/client/index',
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
                test: /\.module\.css$/,
                use: ["isomorphic-style-loader", {
                    loader: "css-loader",
                    options: {
                        importLoaders: 1,
                        // modules: true,
                        esModule: false,
                    }
                },
                "postcss-loader"
            ],
            }
        ]
    },
    resolve: { extensions: ["*", ".js", ".jsx"] },
    plugins: [
        // new CleanWebpackPlugin(),
    ]
    
}