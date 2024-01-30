const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        header: {
            import: './modules/header/header.js',
            dependOn: 'shared',
        },
        body: {
            import: './modules/body/body.js',
            dependOn: 'shared',
        },
        footer: {
            import: './modules/footer/footer.js',
            dependOn: 'shared',
        },
        shared: 'jquery',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    devtool: 'inline-source-map',
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        compress: true,
        port: 8564,
        open: true,
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [0.65, 0.90],
                                speed: 4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            }
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: './index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};
