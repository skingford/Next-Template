/*
 * @Author: kingford
 * @Date: 2023-03-18 23:41:13
 * @LastEditTime: 2023-03-19 01:30:02
 */
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  // 自定义构建目录
  distDir: "build",

  reactStrictMode: true,

  // 添加环境变量
  env: {
    API_URL: "http://localhost:3000/api",
    MY_VARIABLE: "my value",
  },
  // sass
  sassOptions: {
    includePaths: [path.join(__dirname, "./src", "styles")],
  },
  // 修改 webpack 配置
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|woff|woff2|eot|ttf|otf)$/i,
      use: [
        {
          loader: "url-loader",
          options: {
            limit: 8192,
            fallback: "file-loader",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
