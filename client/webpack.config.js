const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

isDevelopment = process.env.NODE_ENV === 'development';
console.log('Working in development ' + isDevelopment);

module.exports = {
    entry: ['./src/js/main.js', './src/css/main.scss'],
    mode: 'development',
    devtool: 'eval-source-map',
    module: {
        rules: [
             {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: isDevelopment,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sourceMap: isDevelopment,
                        },
                    }
                ],
            },
           {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [/node_modules/],
            },
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.scss' ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        writeToDisk: true,
        watchOptions: {
            poll: true,
            ignored: /node_modules/
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            alwayWriteToDisk: true,
        }),
        new HtmlWebpackHarddiskPlugin(),
        new MiniCssExtractPlugin({
            filename: isDevelopment ? '[name].css' : '[name].[hash].css',
            chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css'
        }),
    ],
};
