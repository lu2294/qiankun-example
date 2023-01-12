const path = require('path');
const {
  merge
} = require('webpack-merge');
const common = require('./webpack.config.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  output: {
    filename: 'js/[name].[hash:8].bundle.js',
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader', // 将 JS 字符串生成为 style 节点
          'css-loader', // 将 CSS 转化成 CommonJS 模块
          'postcss-loader' //自动加前缀
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', {
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
  devServer: {
    static: {
      directory: path.join(__dirname, '../public'),
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    open: true,
    port: 4000,
    compress: true,
    hot: true,
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('../public/index.html'),
      inject: 'body',
      hash: false,
      favicon: path.resolve(__dirname, '../public/favicon.ico')
    }),
    new ESLintPlugin({
      // fix: true /* 自动帮助修复 */ ,
      extensions: ['js', 'jsx', 'json'],
      exclude: 'node_modules',
      // quiet: true
      // emitWarning:false
    })
  ],
});