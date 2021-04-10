// // production config
// const webpack = require("webpack");
// const merge = require("webpack-merge");
// const {resolve} = require("path");
// // const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// //   .BundleAnalyzerPlugin;
// const commonConfig = require("./common");
// const CompressionPlugin = require("compression-webpack-plugin");
// const BrotliPlugin = require("brotli-webpack-plugin");
// const DashboardPlugin = require("webpack-dashboard/plugin");
// console.log("process.env.API_URL = ", process.env.API_URL)

// module.exports = (env) => {
//   console.log('API_URL: ', env.API_URL); // true

//   return merge(commonConfig, {
//     mode: "production",
//     entry: "./index.tsx",
//     optimization: {
//       splitChunks: {
//         cacheGroups: {
//           react: {
//             test: /[\\/]node_modules[\\/]((react).*)[\\/]/,
//             name: "react",
//             chunks: "all"
//           },
//           commons: {
//             test: /[\\/]node_modules[\\/]((?!react).*)[\\/]/,
//             name: "common",
//             chunks: "all"
//           }
//         }
//       }
//     },
//     output: {
//       filename: "js/bundle.[hash].min.js",
//       path: resolve(__dirname, "../../dist"),
//       chunkFilename: "js/bundle.[name].js",
//       publicPath: "/"
//     },
//     devtool: "source-map",
//     plugins: [
//       new webpack.HashedModuleIdsPlugin(),
//       new webpack.optimize.ModuleConcatenationPlugin(),
//       // new BundleAnalyzerPlugin(),
//       new CompressionPlugin({
//         filename: "[path].gz[query]",
//         algorithm: "gzip",
//         test: /\.js$|\.css$|\.html$/,
//         threshold: 8192,
//         minRatio: 0.8
//       }),
//       new BrotliPlugin({
//         asset: "[path].br[query]",
//         test: /\.js$|\.css$|\.html$/,
//         threshold: 10240,
//         minRatio: 0.7
//       }),
//       new DashboardPlugin(),
//       new webpack.LoaderOptionsPlugin({
//         options: {
//           tslint: {
//             emitErrors: true,
//             failOnHint: true
//           }
//         }
//       }),
//       new webpack.DefinePlugin({
//         'process.env.API_URL': JSON.stringify(env.API_URL)
//       })
//     ]
//   });
// }
