const HtmlWebpackPlugin = require('html-webpack-plugin');

const {NODE_ENV} = process.env;

const alias =
  NODE_ENV === 'production'
    ? {}
    : {
        inferno: __dirname + '/node_modules/inferno/dist/index.dev.esm.js',
      };

module.exports = {
  mode: NODE_ENV === 'production' ? NODE_ENV : 'development',
  entry: ['./app/index.js'],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {loader: 'css-loader', options: {modules: true, importLoaders: 1}},
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias,
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'app/index.html'}),
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
};
