const path = require("path");

module.exports = (env) => {
  const modules = {
    js: {
      test: /\.ts(x?)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "babel-loader",
        },
      ],
    },

    img: {
      test: /\.(png|svg|jpe?g|gif)$/,
      //include: /images/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[ext]",
            outputPath: "assets/",
            publicPath: "assets/",
          },
        },
      ],
    },

    fonts: {
      test: /\.(ttf|otf|eof|woff|woff2|eot)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "assets",
            name: "[name].[ext]",
          },
        },
      ],
    },
  };

  const resolve = {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      // Тут тот же момент, что и в tsconfig.json, чтобы Webpack смог понять ссылки на директории
      App: path.resolve(__dirname, "src/App/"),
      Pages: path.resolve(__dirname, "src/Pages/"),
      Resources: path.resolve(__dirname, "src/resources/"),
    },
  };

  return {
    modules,
    resolve,
  };
};
