# 🚀 Project-Management-Tools

<div>
  <img src="https://img.shields.io/github/languages/top/fengtianxi001/MTools">
  <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
  <img src="https://img.shields.io/github/issues/fengtianxi001/MTools">
  <img src="https://img.shields.io/github/forks/fengtianxi001/MTools">
  <img src="https://img.shields.io/github/stars/fengtianxi001/MTools">
  <img src="https://img.shields.io/github/downloads/fengtianxi001/MTools/total">
</div>


## 项目简介 

这是一个前端项目的管理工具,由于自己的项目分散在磁盘的各个文件夹内,每次检索和启动都费时费力,所以萌生出开发项目统一入口的想法.

所以在功能和交互的设计上,大多已自己的习惯为参考,如有不合理的地方,请指教

同时这是一个会不停迭代的项目 


## 功能介绍


### 项目管理模块:

- 支持文件拖拽导入

- 支持将项目自动复制到托管文件夹下,可选择复制后自动安装依赖包和自动删除原文件(方便项目的统一管理)

- 支持项目的分类管理

- 支持文件名称模糊查询

- 支持项目拖拽自定义排序

- 支持一键使用编辑器(vscode)打开项目

- 支持一键依赖安装(执行npm install )

- 支持一键执行脚本(package.json中的scripts)

- 支持一键打开文件夹(在系统资源管理器中打开)

- 支持项目托管类型检查(git/svn/local)

- 支持git的拉取,提交,推送

- 支持项目类型识别(vue/react/node/js...)

  





### 文件管理

- 推拽文件到程序,可快速生成访问入口
- 支持文件的点击打开

## 运行

```bash
npm install
npm run dev

```
## 打包
> 打包的免安装程序在文件`dist/win-unpacked/MTools.exe`下
> 安装程序在`dist/Mtools Setup 0.1.0.exe`

```bash
npm run build
```

## 下载

> 安装包可能会落后于代码版本,所以最好是clone代码,自行打包

点击此处下载 [应用](https://github.com/fengtianxi001/MTools/releases/download/V0.0.1/MTools.zip)

## 快捷键
`ctrl + space` 快速激活和隐藏