const WebpackAutoInject = require("webpack-auto-inject-version")
module.exports = {
  transpileDependencies: ["vuetify"],
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new WebpackAutoInject({
        SHORT: "Versioning",
        SILENT: false,
        PACKAGE_JSON_PATH: "./package.json",
        PACKAGE_JSON_INDENT: 2,
        components: {
          AutoIncreaseVersion: true,
          InjectAsComment: true,
          InjectByTag: true
        },
        componentsOptions: {
          AutoIncreaseVersion: {
            runInWatchMode: true
          },
          InjectAsComment: {
            tag: "Version information: {version}, Build Date: {date}",
            dateFormat: "dd/mm/yyyy; hh:MM:ss TT",
            multiLineCommentType: false
          },
          InjectByTag: {
            fileRegex: /\.+/,
            AIVTagRegexp: /(\[AIV])(([a-zA-Z{} ,:;!()_@\-"'\\\/])+)(\[\/AIV])/g,
            dateFormat: "dd/mm/yyyy; hh:MM:ss TT"
          }
        },
        LOGS_TEXT: {
          AIS_START: "AIV started"
        }
      })
    ]
  },
}
