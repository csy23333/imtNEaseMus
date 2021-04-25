module.exports = {
  // publicPath: process.env.NODE_ENV === "production" ? "/production-sub-path/" : "/",
  // publicPath: "./",
  configureWebpack: {
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
