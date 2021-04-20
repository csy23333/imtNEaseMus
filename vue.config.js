module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  publicPath: "./",
  configureWebpack: {
    //以下三行代码用来解决生成 dist 文件夹后获取不到图片资源问题
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
