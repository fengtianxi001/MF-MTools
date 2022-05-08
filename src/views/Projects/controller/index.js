/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 11:09:05
 */
const fs = require("fs")
import store from "@/store/index"
import { exec } from "@/controllers/cmd";
import { confirm } from "@/utils/message";
import { projectPackage, projectUpdatePackage } from "@/controllers/packaging";
import { move, remove, folder, code, copyText as $copyText } from "@/controllers/fs";
import { commit, push, pull, log } from "@/controllers/git"
import { notify } from "@/utils/message";

//编辑器打开
export const editorProject = code

//文件夹打开
export const folderProject = folder

//git提交
export const gitCommit = commit

//git推送
export const gitPush = push

//git拉取
export const gitPull = pull

//git日记
export const gitLog = log

export const copyText = $copyText

//添加项目
export function addProjects(projects) {
    for (let project of projects) {
        const _package = projectPackage(project.path)
        const { path, opath } = _package
        const exist = fs.existsSync(path)
        if (exist) return notify("项目名称已被占用", "error")
        store.commit("addProjects", _package)
        move(opath, path)
    }
}

//删除项目
export async function deleteProject({ path, id }) {
    const result = await confirm("此操作将永久删除该文件")
    if (!result) return false
    store.commit("removeProject", id)
    remove(path)
}

//重载项目
export function reloadProject(params) {
    const update = projectUpdatePackage(params.path)
    const cache = Object.assign(params, update)
    store.commit("updateProject", cache)
}

//终端打开项目
export function cmdProject(cwd) {
    const command = "start /i/high"
    const options = { cwd }
    return exec(command, options)
}

//运行项目脚本
export function runProject({ script, path }) {
    const command = `start /i/high ${script}`
    const options = { cwd: path, detached: true }
    return exec(command, options)
}