const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    mode: "development",
    entry: {
        server: './src/server/index.js'
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
    ]
}