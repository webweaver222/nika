const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const webpackConfig = require("./webpack.config");

module.exports = (env, argv) => {
  const modeEnv = argv.mode || "development";
  const config = webpackConfig(modeEnv);

  const optimizations = {
    minimizer: [new UglifyJsPlugin()],
  };

  return {
    plugins: [new CleanWebpackPlugin()],
    resolve: config.resolve,
    module: {
      rules: [config.modules.js, config.modules.fonts, config.modules.img],
    },
    entry: ["@babel/polyfill", "./src/Server.tsx"], //{
    //main: "./src/Server.tsx", // Тут уже энтрипоинт сервера, который сделаем далее
    //},
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname, "server"), // Все компилируем в папку server
    },
    performance: {
      hints: false,
    },
    optimization: optimizations,
    target: "node", // обязательно указываем режим сборки для node js, а не браузера
    externals: [nodeExternals()], // исключаем node_modules
  };
};
