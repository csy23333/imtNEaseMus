module.exports = {
  configureWebpack: {
    //以下三行代码用来解决生成 dist 文件夹后获取不到图片资源问题
    // publicPath: "./",
    // assetsDir: "static",
    // parallel: false,
    resolve: {
      // extensions:[]
      alias: {
        assets: "@/assets",
        common: "@/common",
        components: "@/components",
        network: "@/network",
        views: "@/views",
      },
    },
    devServer: {
      disableHostCheck: true,
    },
  },
};
