const HtmlPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Webpack = require('webpack')
const path = require("path");

module.exports={
    target:'web', 
    mode:'development',
    entry:'./src/index.tsx',
    output:{
        path:path.resolve(__dirname, 'build'),
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
                test: /\.(jpe?g|png|gif|svg|glb|hdr|gltf)$/i,
                // use :[{
                //     loaders: [
                //         'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
                //         'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
                //       ]
                // }]
                use:[{loader:'file-loader'}]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader"
              },
            // {
            //     test: /\.(scss|sass|css)$/,
            //     use:[{loader: 'css-loader', }]
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //       {
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //           hmr: process.env.NODE_ENV === 'development'
            //         }
            //       },
            //       { loader: 'css-loader', options: { importLoaders: 1 } },
            //       'postcss-loader'
            //     ]
            //   },
            // {
            //     test:/\.s[ac]ss$/i,
            //     use:[MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            // },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader", "node-sass"]
              },
            // {
            //     test: /\.css$/,
            //     use: [
            //       {
            //         loader: MiniCssExtractPlugin.loader,
            //         options: {
            //           hmr: process.env.NODE_ENV === 'development'
            //         }
            //       },
            //       { loader: 'css-loader', options: { importLoaders: 1 } },
            //       'postcss-loader'
            //     ]
            //   },
            //   {
            //     test: /\.(scss|sass|css)$/,
            //     use: [
            //         MiniCssExtractPlugin.loader, "css-loader", "style-loader","sass-loader"
            //     ]
            //   },
        ]
    },
    plugins:[
        new HtmlPlugin({
            filename:"index.html", 
            template:"./src/index.html"
        }), 
        new MiniCssExtractPlugin(),
        new Webpack.DefinePlugin({
            'process.env.NODE_ENV' : JSON.stringify('development')
          }),
        // new Webpack.DefinePlugin({ // THIS allows us to access the node_env in our code
        //     "process.env":{
        //         "NODE_ENV":JSON.stringify(process.env.NODE_ENV)
            // This has effect on the react lib size
        // })

    ],
    devtool: 'inline-source-map',
    devServer:{
        historyApiFallback:true,
        port:3000,
        compress: true,
        contentBase: path.join(__dirname, 'build'),
        hot: true,
    },

}