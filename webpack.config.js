const path = require('path');
const webpack = require('webpack');


module.exports = {
  // Entry point of your application
  entry: './src/index.js',
 plugins: [
    // Add this plugin configuration
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'], // Polyfill Buffer
    }),
  ],

  resolve: {
    // Add this fallback section
    fallback: {
      "buffer": require.resolve("buffer/"), 

    },
  }, 
  devServer: {
    static: [
     { directory: path.join(__dirname, 'dist')},
     { directory: path.join(__dirname, 'sample')}
    ],
    compress: true,
    port: 8080, // Specify the port number for your server
  },
  // Output configuration
  output: {
    filename: 'bundle.js', // Output file name
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  // Mode: 'development' or 'production'
  mode: 'development',
};
