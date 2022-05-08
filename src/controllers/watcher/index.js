/*
 * @Description: 文件监听
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-31 02:17:12
 * @LastEditTime: 2021-12-31 13:13:18
 */

// addDir => 添加文件夹
// unlinkDir 删除文件夹
// add => 添加文件
// unlink 删除文件

/*eslint-disable*/

const chokidar = require('chokidar');
import { baseURL, datafolder, projectsfolder, filesfolder } from "@/utils/config";
import store from "@/store/index"
import { projectPackage, filesPackage } from "@/controllers/packaging";
import { unlink } from "original-fs";

export function initWater() {
    const options = {
        ignored: datafolder,
        depth: 1,
        ignoreInitial: true,
    }
    const watcher = chokidar.watch(baseURL, options)
    watcher.on('all', handle);
}

function handle(event, path) {
    if (path.indexOf(projectsfolder) >= 0) {
        projectDeal(event, path)
    } else if (path.indexOf(filesfolder) >= 0) {
        console.log(event, path)
        fileDeal(event, path)
    }
}

function projectDeal(event, path) {
    const EVENT_ENUM = ["addDir", "unlinkDir"]
    if (!EVENT_ENUM.includes(event)) return false
    const exist = existProject(path)
    if (event === EVENT_ENUM[0]) {
        //监听到 项目添加
        if (exist) return false
        //否则就是软件外部添加
        const packet = projectPackage(path)
        store.commit("addProjects", packet)
    } else {
        //监听到 项目删除
        if (!exist) return false
        store.commit("removeProjectByPath", path)
    }
}


function existProject(path) {
    const projects = store.getters.projects
    const result = projects.find(project => project.path === path)
    return Boolean(result)
}


function fileDeal(event, path) {
    const EVENT_ENUM = ["addDir", "add", "unlinkDir", "unlink"]
    if (!EVENT_ENUM.includes(event)) return false
    const exist = existFile(path)
    if (event === EVENT_ENUM[0] || event === EVENT_ENUM[1]) {
        //监听到 文件添加
        if (exist) return false
        //否则就是文件外部添加
        const packet = filesPackage(path)
        store.commit("addFiles", packet)
    } else {
        //监听到 文件删除
        if (!exist) return false
        store.commit("removeFileByPath", path)
    }
}

function existFile(path) {
    const files = store.getters.files
    const result = files.find(file => file.path === path)
    return Boolean(result)
}