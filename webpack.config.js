const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

const path = require("path");
module.exports={
    target:'web', 
    mode:process.env.NODE_ENV,
    entry:'./src/index.tsx',
    output:{
        path:path.resolve(__dirname, 'dist'),
        publicPath: '/',//for react-router-dom nested-routes
        filename:'bundle.js'
    },
    resolve:{
        extensions:[".ts", ".tsx", ".js", ".jsx"],
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "events":false,
            "buffer": require.resolve("buffer/"),
            "crypto": require.resolve('crypto-browserify'),
            // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
          }
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use:[
                    {
                        loader:'babel-loader'
                    }
                ]
            },
            {
                test: /\.html$/,
                exclude: /node_modules/,
                use:[{loader:'html-loader'}]
            },
            {
                test: /\.(jpe?g|png|mp4|woff(2)?|ttf|eot|otf|svg|gif|glb|hdr|gltf)$/i,
                use:[{loader:'file-loader'}]
            },
            // {
            //     test: /\.mp4$/,
            //     use: 'file-loader?name=videos/[name].[ext]',
            // },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
              },
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename:"index.html", 
            template:"./public/index.html"
        }), 
        new MiniCssExtractPlugin(),
        // new Webpack.EnvironmentPlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
        // new Webpack.DefinePlugin({
        //     // PRODUCTION: JSON.stringify(true),
        //     // VERSION: JSON.stringify('5fa3b9'),
        //     // BROWSER_SUPPORTS_HTML5: true,
        //     'typeof window': JSON.stringify('object'),
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // })

    ],
    devtool: 'inline-source-map',//"source-map"
    devServer:{
        historyApiFallback:true,
        port:3000,
        compress: true,
        open: true,
        progress:false,
        // contentBase: path.join(__dirname, 'dist'),
        hot: true,
    },
}