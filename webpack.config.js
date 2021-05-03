var path = require('path');
var HTMLWebpckPlugin = require('html-webpack-plugin');
module.exports = {
    mode:'development',
    devServer:{
        port:8080,
        open:false
    },
    entry:'./src/main.js',
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, 'dist')
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins:[
        new HTMLWebpckPlugin({
            filename:'index.html',
            template:'index.html'
        })
    ]
}