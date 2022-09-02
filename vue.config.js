const { defineConfig } = require("@vue/cli-service");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:
    process.env.NODE_ENV === "production" ? "/Product-Preview-Component/" : "/",
  css: {
    extract: {
      ignoreOrder: true,
    },
  },
  configureWebpack: {
    plugins: [new MiniCssExtractPlugin()],
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            process.env.NODE_ENV !== "production"
              ? "vue-style-loader"
              : MiniCssExtractPlugin.loader,
            "css-loader",
          ],
        },
      ],
    },
  },
});
