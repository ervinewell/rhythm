const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../', 'src/index.js'), // 入口文件路径
  output: {
    filename: 'renderer.js',
    path: path.resolve(__dirname, '../', 'dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
		  {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }, {
        test: /\.(s?css)$/,
        use: ['style-loader', 'css-loader?modules', 'sass-loader'],
      }, {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader?javascriptEnabled'],
      }, {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'dist/image/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'font/[name].[hash:7].[ext]'
        }
      }, {
        test: /\.(zip|xlsx|xls)$/,
        loader: 'file-loader',
        query: {
          name: 'file/[name].[hash:7].[ext]'
        }
      }
		]
  }
};