const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist' //where contents are served from
  },
  plugins: [
    new HtmlWebpackPlugin({
       filename: 'index.html', // name of html file to be created
       template: './index.html' // source from which html file would be created
    })
]
}



// const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin');

// module.exports = {
//   module: {
//     rules: [
//         {
//         test: /\.css$/,
//         use: [
//             'style-loader',
//             'css-loader'
//         ]
//         },
//         {
//         test: /\.(png|svg|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader'
//           }
//         ]
//         }
//     ]
//     },
//   entry: './src/index.js',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'js/bundle.js'
//   },
//   devServer: {
//     contentBase: './dist' //where contents are served from
//   },
//   plugins: [
//     new HtmlWebpackPlugin({
//        filename: 'index.html', // name of html file to be created
//        template: './index.html' // source from which html file would be created
//     })
// ]
// }


