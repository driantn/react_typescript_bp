const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});

const tsModule = {
  test: /\.(ts|tsx)$/,
  use: 'ts-loader',
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/
};

const scssModule = {
  test: /\.scss$/,
  include: path.resolve(__dirname, 'src'),
  exclude: /node_modules/,
  use: [
    {
      loader: "style-loader"
    },
    {
      loader: "css-loader"
    },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
      },
    },
    {
      loader: "sass-loader",
      options: { sourceMap: true }
    }
  ]
};

const srcPath = (subdir) => {
  return path.join(__dirname, "./src", subdir);
}

const resolveAlias = {
  base: srcPath('./'),
  assets: srcPath('assets'),
};

const resolveExtensions = [ '.tsx', '.ts', '.js', '.scss' ];

const plugins = [htmlPlugin];
const modules = [tsModule, scssModule];



module.exports = {
  entry: './src/index.tsx',
  devtool: 'inline-source-map',
  resolve: {
    alias: resolveAlias,
    extensions: resolveExtensions
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      ...modules
    ]
  },
  plugins
};
