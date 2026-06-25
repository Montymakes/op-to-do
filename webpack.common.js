 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'OP To-Do App',
       template: "./src/template.html",
     }),
   ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
   },
   module: {
     rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|webp|jpg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(ttf)$/i,
        type: 'asset/resource',

      },
    ],
   }
 };