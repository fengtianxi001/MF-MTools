module.exports = {
  publicPath: "./",
  lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        appId: "mtools-dev",
        productName: "mtools2.0",
        copyright: "Copyright © 2021", // 版权信息
        directories: {
          output: "./dist", // 输出文件路径
        },
        win: {
          // win相关配置
          icon: "./favicon.ico", // 图标，当前图标在根目录下，注意这里有两个坑
          target: [
            {
              target: "nsis", // 利用nsis制作安装程序
              arch: [
                "x64", // 64位
                "ia32", // 32位
              ],
            },
          ],
        },
      },
      nodeIntegration: true,
      enableRemoteModule: true,
      webSecurity: false,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @use "@/styles/var.scss" as *;
          @use "@/styles/mixins.scss" as *;
          @use "@/styles/base.scss" as *;
          @use "@/styles/theme.scss" as *;
        `,
      },
    },
  },
};
