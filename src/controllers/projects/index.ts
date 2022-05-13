import { exec } from "controllers/common/index";
import { isFileExist, getGitLogs } from "utils/index";
import { ElMessage } from "element-plus";
import { remote } from "electron";
const { dirname, extname, join } = require("path");
const fs = require("fs");
export function npmInstall() {
    //todo
}
export function openInEdit(src) {
    return exec({
        command: `code "${src}"`,
    });
}
export function openInExplore(src: string) {
    //if it's file. open its folder
    const folderUrl = extname(src) ? dirname(src) : src;
    return exec({
        command: `explorer "${folderUrl}"`,
    });
}
export function openInGithub(src) {
    const url = join(src, ".git", "config");
    if (!isFileExist(url)) return ElMessage.error("该项目未被git托管");
    const config = fs.readFileSync(url).toString();
    const target = config.match(/((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/)[0];
    if (target) {
        return exec({
            command: `explorer "${target}"`,
        });
        // shell.openExternal(target)
    } else {
        ElMessage.error("找不到这个项目的git地址啊");
    }
}
export function reloadData(src) {
    //todo
}
export async function createDailyReport(src) {
    const result = getGitLogs(src, "day")
    console.log(JSON.stringify(result,null,4))
    const desktop = remote.app.getPath("desktop")
    
    fs.writeFileSync(join(desktop,"/dailyReport.json"),JSON.stringify(result,null,4))
}
export function createWeeklyReport(src) {
    const result = getGitLogs(src, "week")
    const desktop = remote.app.getPath("desktop")
    fs.writeFileSync(join(desktop,"/weeklyReport.json"),JSON.stringify(result,null,4))
}
export function editProject(src) {
    //todo
}
export function deleteProject(src) {
    //todo
}

export function runScript(src, script) {
    const command = `start /i/high npm run ${script}`;
    console.log(command);
    const options = { cwd: src, detached: true };
    return exec({ command, options, autoCloseLoading: 1000 });
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
};
