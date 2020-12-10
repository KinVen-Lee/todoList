const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    // 指定入口文件
    entry: ["./public/src/index.tsx"],
    // 指定输出文件名
    output: {
        filename: "./js/main.js"
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },{
                test:/\.css$/,
                loaders:["style-loader","css-loader"],   //用此加载器处理匹配到的文件
                exclude: /node_modules/
            },{
                test: /(\.jsx|\.js)$/,
                loader: [
                    "babel-loader"
                ],
                exclude: /node_modules/
            },{
                test:/\.(woff|woff2|eot|otf|ttf|svg)$/,
                use:'file-loader'
            }
            
        ]
    },
    // 指定编译后是否生成source-map，这里判断如果是生产打包环境则不生产source-map
    devtool: process.env.NODEENV === "production" ? false : "inline-source-map",
    // 这里使用webpack-dev-server，进行本地开发调试
    devServer: {
        contentBase: "./public",
        stats: "errors-only",
        compress: false,
        host: "localhost",
        port: 1234
    },
  
    plugins: [
      
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./dist"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/asset/index.html"
        })
    ]
};
