// // shared config (dev and prod)
// const { resolve } = require("path");
// const { CheckerPlugin } = require("awesome-typescript-loader");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   resolve: {
//     extensions: ['.ts', '.tsx', '.js', '.jsx']
//   },
//   context: resolve(__dirname, '../../src'),
//   module: {
//     rules: [
//       // {
//       //   test: /\.js$/,
//       //   // include: path.join(paths.appNodeModules, 'dwt'),
//       //   loader: 'script-loader'
//       // },
//       {
//         test: /\.js$/,
//         use: ['babel-loader', 'source-map-loader'],
//         exclude: /node_modules/
//       },
//       {
//         test: /\.(ts|tsx)?$/,
//         use: ['babel-loader', 'awesome-typescript-loader']
//       },
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               hmr: process.env.NODE_ENV === 'development'
//             }
//           },
//           { loader: 'css-loader', options: { importLoaders: 1 } },
//           'postcss-loader'
//         ]
//       },
//       {
//         test: /\.(scss|sass)$/,
//         loaders: [
//           'style-loader',
//           { loader: 'css-loader', options: { importLoaders: 1 } },
//           'sass-loader'
//         ]
//       },
//       {
//         test: /\.(otf|eot)$/,
//         use: {
//           loader: 'file-loader'
//         }
//       },
//       {
//         test: /\.(jpe?g|png|gif|svg|glb|hdr|gltf)$/i,
//         loaders: [
//           'file-loader?hash=sha512&digest=hex&name=img/[hash].[ext]',
//           'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new CheckerPlugin(),
//     new HtmlWebpackPlugin({ template: 'index.html.ejs' }),
//     new MiniCssExtractPlugin({
//       filename: "styles.css",
//       chunkFilename: "[id].css"
//     })
//   ],
//   externals: {
//     react: 'React',
//     'react-dom': 'ReactDOM'
//   },
//   performance: {
//     hints: false
//   }
// }
