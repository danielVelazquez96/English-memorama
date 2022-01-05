const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const CssMinimizer=require('css-minimizer-webpack-plugin');
const terser      =require('terser-webpack-plugin');

module.exports={
    mode: 'production',

    // Permite borrar la carpeta de dist para que se cree de nuevo
    output:{
        clean:true,
        filename: 'main.[contenthas].js'
    },

    module:{
        rules:[
            {
                // Busca todos los archivos de html
                test: /\.html$/,
                // Cada que encuentra uno va a cargar el plugin html-loader
                loader: 'html-loader',
                
                options: {
                    sources: false,
                    minimize: false, //para minimizar o no el archivo
                }

            },
            {
                // Con los paquetes pasa todos los archivos css a su forma de js
                test: /\.css$/,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [MiniCssExtract.loader,'css-loader'],
            },
            {
                test: /\.(png|pge?g!gif)$/,
                loader: 'file-loader'
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                  loader: "babel-loader",
                  options: {
                    presets: ['@babel/preset-env']
                  }
               }
            }
        ]
    },

    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizer(),
            new terser(),
        ]
    },
    
    plugins:[
        new HtmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html', cambia el nombre del archivo
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: `[name].[fullhash].css`,
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
              { from:'src/assets/',to:'assets/' },
            ],
          }),  
    ]
}




