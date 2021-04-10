// // development config
// const { merge } = require('webpack-merge');
// const webpack = require("webpack");
// const commonConfig = require("./common");
// const TSLintPlugin = require("tslint-webpack-plugin");
// const path = require("path");
// const DashboardPlugin = require("webpack-dashboard/plugin");
// // const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
// //   .BundleAnalyzerPlugin;

// module.exports = (env) => {
//   console.log('API_URL: ', env.API_URL)

//   return merge(commonConfig, {
//     mode: "development",
//     entry: [
//       "react-hot-loader/patch", // activate HMR for React
//       "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
//       "./index.tsx" // the entry point of our app
//     ],
//     devServer: {
//       hot: true, // enable HMR on the server,
//       contentBase: path.resolve(__dirname, "../../src"),
//       watchContentBase: true,
//       historyApiFallback: true,
//     },
//     output: {
//       publicPath: "/"
//     },
//     devtool: "cheap-module-eval-source-map",
//     plugins: [
//       new webpack.HotModuleReplacementPlugin(), // enable HMR globally
//       // new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
//       // new BundleAnalyzerPlugin(),
//       new TSLintPlugin({
//         files: ["./src/**/*.ts"]
//       }),
//       new DashboardPlugin(),
//       new webpack.DefinePlugin({
//         'process.env.API_URL': JSON.stringify(env.API_URL),
//         'global': {},
//         'fm': {},
//         'fs': 'empty',
//       }),
//       new webpack.LoaderOptionsPlugin({
//         options: {
//           tslint: {
//             emitErrors: true,
//             failOnHint: true
//           }
//         }
//       })
//     ],
//   });
// }
