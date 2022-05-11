import { exec } from "controllers/common/index";
const { dirname, extname } = require("path")
export function npmInstall() {
    //todo
}
export function openInEdit(src) {
    return exec({
        command: `code "${src}"`,
    })
}
export function openInExplore(src: string) {
    //if it's file. open its folder
    const folderUrl = extname(src) ? dirname(src) : src
    return exec({
        command: `explorer "${folderUrl}"`,
    })
}
export function openInGithub(src) {
    //todo
}
export function reloadData(src) {
    //todo
}
export function createDailyReport(src) {
    //todo
}
export function createWeeklyReport(src) {
    //todo
}
export function editProject(src) {
    //todo
}
export function deleteProject(src) {
    //todo
}

export function runScript(src, script) {
    const command = `start /i/high npm run ${script}`
    console.log(command)
    const options = { cwd: src, detached: true }
    return exec({ command, options, autoCloseLoading: 1000 })
}
export default {
    npmInstall,
    openInEdit,
    openInExplore,
    openInGithub,
    reloadData,
    createDailyReport,
    createWeeklyReport,
    editProject,
    deleteProject,
}