const prodConfig = require('./webpack.prod.config');
const devConfig = require('./webpack.dev.config');

module.exports = (env, argv) => {
  const baseConfig = argv.mode === 'development' ? devConfig : prodConfig;
  baseConfig.entry = './src/index.js';
  baseConfig.resolve = {
    extensions: ['.js']
  };
  // BaseConfig.module.rules.push({
  //   test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
  //   use: [
  //     {
  //       loader: 'url-loader',
  //       options: {
  //         limit: 100000,
  //         name: './assets/fonts/[name].[ext]'
  //       }
  //     }
  //   ]
  // });
  // Uncomment if loading files is needed
  baseConfig.module.rules.push({
    test: /\.(gif|ico|png|jpe?g)$/i,
    use: [
      {
        loader: 'file-loader?name=[name].[ext]'
      }
    ]
  });
  return baseConfig;
};
