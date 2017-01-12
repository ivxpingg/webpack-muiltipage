var path = require('path');
module.exports = {
   entry: {
      "pages/home": path.resolve(__dirname, 'src/pages/home/page'),
      "pages/user": path.resolve(__dirname, 'src/pages/user/page'),
   },
   output: {
     path: path.rsolve(__dirname, 'build'),
     publicPath: '../../',
     filename: '[name]/entry.js',
     chunkFilename: '[id].bundle.js'
   },
   module: {
     
   }
}
