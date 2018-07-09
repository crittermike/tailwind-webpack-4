const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'assets/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'compiled')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                ident: 'postcss',
                plugins: () => [
                  require('tailwindcss')('./tailwind.js'),
                  require('autoprefixer')
                ]
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [
    // Pulls out compile css to a standalone file
    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ]
};
