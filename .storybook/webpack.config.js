const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({ config, mode }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('babel-loader'),
    options: {
      presets: [['react-app', { flow: false, typescript: true }]],
    },
  },
    {
      test: /\.scss$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
    },
    {
      test: /\.(glb|hdr|gltf)$/i,
      loaders: [
        'file-loader',
        // 'image-webpack-loader?bypassOnDebug&optipng.optimizationLevel=7&gifsicle.interlaced=false'
      ]
    }
  );
  config.plugins.push(new MiniCssExtractPlugin({ filename: '[name].css' }));

  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
