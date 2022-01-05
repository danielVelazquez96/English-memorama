const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
const CopyPlugin = require("copy-webpack-plugin");

module.exports={
    mode: 'development',

    // Permite borrar la carpeta de dist para que se cree de nuevo
    output:{
        clean:true,
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
            }
        ]
    },

    
    plugins:[
        new HtmlWebpack({
            title: 'Mi Webpack App',
            // filename: 'index.html', cambia el nombre del archivo
            template: './src/index.html'
        }),

        new MiniCssExtract({
            filename: `[name].css`,
            ignoreOrder: false
        }),

        new CopyPlugin({
            patterns: [
              { from:'src/assets/',to:'assets/' },
            ],
          }),  
    ]
}




