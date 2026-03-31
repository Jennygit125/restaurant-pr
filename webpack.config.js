// webpack.config.js
const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/main.js",
  output: {
    clean: true,
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
  },
};
