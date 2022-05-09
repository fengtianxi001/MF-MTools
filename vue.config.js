const path = require("path"); //引入path模块
const resolve = (dir) => path.join(__dirname, dir);
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");

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
  chainWebpack: (config) => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("assets", resolve("./src/assets"))
      .set("components", resolve("./src/components"))
      .set("constants", resolve("./src/constants"))
      .set("controllers", resolve("./src/controllers"))
      .set("styles", resolve("./src/styles"))
      .set("utils", resolve("./src/utils"))
      .set("views", resolve("./src/views"))
      .set("hooks", resolve("./src/hooks"))

      .set("configs", resolve("./src/configs"));
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
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver({
          exclude: new RegExp(/^(?!.*loading-directive).*$/)
        })]
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
  }
};
