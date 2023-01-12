const {
  merge
} = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
// const {
//   BundleAnalyzerPlugin
// } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

// const BUILD_PATH = path.resolve(__dirname, '../build');
const common = require('./webpack.config.js');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'static/js/[name]-bundle-[hash:6].js',
    publicPath:'/child1web/'
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', {
          loader: 'less-loader',
          options: {
            lessOptions: {
              modifyVars: {
                '@primary-color': '#5a84ee',
                '@layout-header-background': '#fff',
                "@text-color": "#53627c",
              },
              javascriptEnabled: true,
            },
          }
        }],
      },
    ],
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // 屏蔽log
          },
        },
      }),
    ],
  },
  plugins: [
    new CssMinimizerPlugin(),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
      ignoreOrder: true
    }),
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      filename: 'index.html',
      inject: 'body',
      favicon: path.resolve(__dirname, '../public/favicon.ico'),
      minify: {
        removeComments: true,
      },
    }),
    // new BundleAnalyzerPlugin(),
    new CleanWebpackPlugin()
  ]
});