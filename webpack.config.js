const path = require("path");
const HtmlWebpackplugin = require("html-webpack-plugin")

module.exports = {
    entry: "./src/main.js",
    output:{
        path: path.resolve(__dirname + "/dist"), 
        filename:"bundle.js"
    },
    plugins: [
        new HtmlWebpackplugin({
            template:"./src/index.html"
        })
    ],
    devServer: {
        contentBase:path.join(__dirname,'dist'),
        compress: true,
        port: 8080
    },
    module:{
        rules:[
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader","css-loader","sass-loader"],
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/i,
                use:[
                    {
                        loader: 'file-loader',
                        options:{
                            name: '[name].[ext]',
                            outputPath:'images',
                            publicPath:'images',
                            emitFile: true,
                            esModuke: false,
                        }
                    },
                ],
            }, 

        ]
    }
}