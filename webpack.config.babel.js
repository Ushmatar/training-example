import path from 'path'
import webpack from 'webpack'

const plugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NamedModulesPlugin(),
  new webpack.NoEmitOnErrorsPlugin()
]

export default () => ({
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src/index.tsx')
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [
      path.resolve('./assets'),
      path.resolve('./src'),
      path.resolve('./node_modules')
    ],
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader/webpack'].concat([
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ])
      },
      {
        // ES& modules
        test: /\.js$/,
        include: [path.resolve('node_modules', 'io-ts-reporters')],
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          'css-loader?importLoader=1',
          'postcss-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader:
              'url-loader?name=assets/images/[name]_[hash].[ext]&limit=10000'
          }
        ]
      },
      {
        test: /\.(svg|ttf|eot|woff)$/,
        use: [
          {
            loader: 'file-loader?name=fonts/[name].[ext]'
          }
        ]
      }
    ]
  },
  plugins: [...plugins],
  devServer: {
    host: '0.0.0.0',
    port: '8080',
    hot: true,
    inline: true,
    historyApiFallback: true,
    disableHostCheck: true
  }
})
