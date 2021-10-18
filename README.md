# 🚀 Project-Management-Tools
<div align="center">
	<img src="https://raw.githubusercontent.com/fengtianxi001/MTools/master/screenshots/banner.png">
  <div>
    <img src="https://img.shields.io/github/languages/top/fengtianxi001/MTools">
    <img src="https://travis-ci.org/boennemann/badges.svg?branch=master">
    <img src="https://img.shields.io/github/issues/fengtianxi001/MTools">
    <img src="https://img.shields.io/github/forks/fengtianxi001/MTools">
    <img src="https://img.shields.io/github/stars/fengtianxi001/MTools">
    <img src="https://img.shields.io/github/downloads/fengtianxi001/MTools/total">
  </div>
</div>




## 项目简介 

这是一个前端项目的管理工具,由于自己的项目分散在磁盘的各个文件夹内,每次检索和启动都费时费力,所以萌生出开发项目统一入口的想法.
所以在功能和交互的设计上,大多以自己的习惯为参考,如有不合理的地方,请指教.同时这是一个会不停迭代的项目

## 下载
> 安装包可能会落后于代码版本,所以最好是clone代码,自行打包

> 目前仅支持windows平台

[点击此处下载应用安装包](https://github.com/fengtianxi001/MTools/releases/download/v1.0.0/mtools.Setup.1.01.0.exe)

## 提示
- 所有数据均保存在本地,无联网行为
- 所有的数据默认保存在`D://mtools_cache/`(若没有D盘,保存在`C://mtools_cache/`)文件夹下, 程序迭代和重新安装,可以自动导入旧数据.

## 主页面展示
![show](https://github.com/fengtianxi001/MTools/blob/master/screenshots/main.png?raw=true)




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
- 文件的分类管理
- 快速打开文件所在文件夹
- 快速复制文件路径

### 程序管理
- 拖入程序快捷方式或者主程序(exe),可实现程序的快捷访问
- 支持程序的分类管理

### 网站门户
- 实现baidu,github,youdao的快速查询访问
- 预置常用的前端开发必备网站快捷方式

## 运行

```bash
npm install
npm run dev
```

## 打包

```bash
npm run build
```



## 更多页面效果展示
![show](https://github.com/fengtianxi001/MTools/blob/master/screenshots/Snipaste_2021-10-18_22-21-28.png?raw=true)
![show](https://github.com/fengtianxi001/MTools/blob/master/screenshots/Snipaste_2021-10-18_22-21-52.png?raw=true)
![show](https://github.com/fengtianxi001/MTools/blob/master/screenshots/Snipaste_2021-10-18_22-22-02.png?raw=true)
