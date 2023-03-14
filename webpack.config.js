const path = require('path');
module.exports = {
    mode: "development",
    entry: "./src/front/app.jsx",
    output: { // NEW
        path: path.join(__dirname, 'public'),
        filename: "index.js"
    }, // NEW Ends
    // devServer: {
    //   // port: 3000,
    //   contentBase: path.join(__dirname, 'public'), //serve your static files from here
    //   watchContentBase: true,
    // },
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
        ]
      }
      
  
};