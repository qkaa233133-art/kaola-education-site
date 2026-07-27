# GitHub 上传说明

本目录已整理为 GitHub 源码仓库格式，包含网站源码、图片、二维码、依赖清单和构建配置。

## 上传方法

1. 在 GitHub 创建一个空仓库，不要勾选自动创建 README。
2. 解压本压缩包。
3. 上传 kaola-education 文件夹里面的全部文件，而不是只上传 ZIP 文件。
4. 确认 app、public、package.json 和 package-lock.json 均已出现在仓库中。

## 本地运行

需要 Node.js 20 或更高版本：

- 安装依赖：npm ci
- 本地预览：npm run dev
- 构建网站：npm run build
- 启动构建版本：npm run start

## 已排除

node_modules、Git 历史、构建缓存、临时部署包和本地输出文件均未打包。
