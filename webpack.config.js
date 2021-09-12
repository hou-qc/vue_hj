const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    // 模式: 生产环境
    mode: 'production',
    // 入口
    entry: {
        app: path.resolve(__dirname, 'src/index.js')
    },
    // 出口(打包生成js)
    output: {
        filename: 'static/js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 模块加载器
    module: {
        rules: [
            {   //处理js文件
                test: /\.js$/,
                //exclude: /(node_modules|bower_components)/,  排除匹配的文件夹
                include: path.resolve(__dirname, 'src'),  //只对此路径的js进行处理
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'], //配置预设包（包括了多个ES语法解析plugin包）
                        // plugins:{ //配置预设包之外的插件包

                        // }
                    }
                }
            },
            // 处理css资源并兼容
            {
                test: /\.css$/, //匹配所有css文件
                use: ['vue-style-loader', {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1   //往前1步找到postcss-loader
                    }
                }, 'postcss-loader'] //从后面开始执行
            },
            // 处理less资源并兼容
            { //需要css-loader、less、style-loader、less-loader
                test: /\.less$/, //匹配所有less文件
                use: ['vue-style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'] //从后面开始执行
            },
            // 处理图片资源
            {
                test: /\.(png|svg|gif|jpg?g)$/,
                type: 'asset',
                generator: {
                    filename: 'images/[name].[hash:4][ext]' //设置产出文件的地址等等
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024 //产出大于8kb文件
                    }
                },

            },
            // 处理字体文件
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'font/[name].[hash:3][ext]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',   //模板
            filename: 'index.html'    //生成的文件名
        }),
        new CleanWebpackPlugin(),//清除打包文件夹dist
        new VueLoaderPlugin()
    ],
    // 开发服务器
    devServer: {
        //prot: 8081, //端口设置
        open: true, // 自动打开浏览器
        // quiet: true, // 不做太多日志输出   未知原因会报错
    },
    resolve: {
        //1、简化模块路径的编写
        //2、加快打包
        extensions: ['.js', '.vue', '.json'], // 可以省略的后缀名
        alias: { // 路径别名(简写方式)
            'vue$': 'vue/dist/vue.esm.js',  // 表示精准匹配
        }
    }
}