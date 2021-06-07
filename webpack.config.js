const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

const path = require("path");
module.exports={
    target:'web', 
    mode:'development',
    entry:'./src/index.tsx',
    output:{
        path:path.resolve(__dirname, 'build'),
        publicPath: '/',//for react-router-dom nested-routes
        filename:'bundle.js'
    },
    resolve:{
        extensions:[".ts", ".tsx", ".js", ".jsx"]
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
                test: /\.(jpe?g|png|woff(2)?|ttf|eot|otf|svg|gif|glb|hdr|gltf)$/i,
                use:[{loader:'file-loader'}]
            },
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
        // new Dotenv({
        //     path: './.env',
        // }),
        new Webpack.EnvironmentPlugin({
        path: './.env', // Path to .env file (this is the default)
        // safe: true, // load .env.example (defaults to "false" which does not use dotenv-safe)
        //     // THIS allows us to access the node_env in our code
            NODE_ENV: 'development', // use 'development' unless process.env.NODE_ENV is defined
            DEBUG: false,
          })

    ],
    devtool: 'inline-source-map',//"source-map"
    devServer:{
        historyApiFallback:true,
        port:3000,
        compress: true,
        open: true,
        progress:false,
        // contentBase: path.join(__dirname, 'build'),
        hot: true,
    },
}