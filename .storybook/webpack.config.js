const path = require('path');
const babelConfig = require('./babel.config.js')

module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: 'babel-loader',
        options: babelConfig,
      },
      {
        loader: 'react-docgen-typescript-loader',
        options: {
          tsconfigPath: path.join(__dirname, "../tsconfig.json"),
        },
      },
    ]
  });
  config.resolve.extensions.push('.ts', '.tsx', '.js', '.jsx');
  config.resolve.alias['next/config'] = path.resolve(__dirname, '../src/__mocks__/nextConfig')

  return config;
};
