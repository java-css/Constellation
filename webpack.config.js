module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname, //打包以后的文件存放目录
    filename: "./release/bundle.js" // 打包以后生成的文件名称
  },
  module: {
    rules: [
      {
        test: /\.js$/, //表示当前要打包的文件的后缀正则表达式
        // loader:'babel-loader?presets[]=es2015', //如果写到这里，将来在打包.vue文件的时候会报错，表示先利用css-loader解析.css文件，再调用style-loader打包
        exclude: /(node_modules)/,
        loader: "babel-loader" //node_modules中的所有.js文件不去转换，提高打包性能
      }
    ]
  }
};
