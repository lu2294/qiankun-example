const path = require('path');
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const { name } = require('../package.json');

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

module.exports = {
  mode: 'production',
  entry: {
    index: resolve('../src/index.js')
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'static/js/[name]-bundle-[hash:6].js',
    library : `${name}-[name]`,
    libraryTarget : 'umd',
    uniqueName : `webpackJsonp_${name}`,
    globalObject : 'window'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.less', '.scss'], //如果有多个文件有相同的名字，但后缀名不同，webpack 会解析列在数组首位的后缀的
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
    alias: {
      _components: path.join(__dirname, '../src/pages/components'),
      _images: path.join(__dirname, '../src/assets/images'),
      _pages: path.join(__dirname, '../src/pages'),
      _util: path.join(__dirname, '../src/utils'),
    }
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          // 转base64的条件
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          },
        },
        generator: {
          filename: "static/images/[contenthash][ext][query]",
        },
      },{
        test: /\.(svg)$/,
        type: "asset/resource",
        generator: {
          filename: "static/images/[contenthash][ext][query]",
        },
      },
    ],
  },
  plugins: [
    new ProgressBarWebpackPlugin(),
    new AntdDayjsWebpackPlugin()
  ]
}