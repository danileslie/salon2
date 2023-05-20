const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


let pages = ['index', 'services', 'gallery', 'about', 'contact'];

module.exports = {
    entry: pages.reduce((config, page) => {
        config[page] = `./src/${page}.js`;
        return config;
      }, {}),
    output: {
        filename: '[name].js', 
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/',
    },
    optimization: {
        splitChunks: {
          chunks: "all",
        },
      },
    resolve: {
        extensions: ['.json', '.js', '.jsx'],
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [].concat(
        pages.map(
          (page) =>
            new HtmlWebpackPlugin({
              inject: true,
              template: `src/${page}.html`,
              filename: `${page}.html`,
              chunks: [page],
            })
        ),
    )
    // plugins: [new HtmlWebpackPlugin({
    //     filename: 'index.html',
    //     template: 'src/index.html',
    // })],


};