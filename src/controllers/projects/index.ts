import { exec } from "controllers/common/index";
import { screenLoading } from "utils/index";
import { ElMessage } from "element-plus";
import { gitLog, gitLog2Markdown, gitConfig } from "utils/git"
const { dirname, extname, join } = require("path");
const { remote } = require('electron')
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
export function openInGithub(src:string) {
    const config = gitConfig(src)
    const target = config.match(/((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/);
    if (target) {
        return exec({
            command: `explorer "${target[0]}"`,
        });
    } else {
        ElMessage.error("找不到这个项目的git地址啊");
    }
}
export function reloadData(src) {
    //todo
}
export async function createDailyReport(src) {
    const closeLoading = screenLoading()
    const gitlog = gitLog(src, "day")
    const conetnt = gitLog2Markdown(gitlog, "日报")
    remote.dialog.showSaveDialog({
        title: '保存周报',
        buttonLabel: '保存',
        defaultPath: join(remote.app.getPath("desktop"), "/DailyReport.md"),
        filters: [{ name: 'markdown', extensions: ['md'] }]
    }).then(({ canceled, filePath }) => {
        !canceled && fs.writeFileSync(filePath, conetnt)
        closeLoading()
    })
}
export function createWeeklyReport(src) {
    const closeLoading = screenLoading()
    const gitlog = gitLog(src, "week")
    const conetnt = gitLog2Markdown(gitlog, "周报")
    remote.dialog.showSaveDialog({
        title: '保存周报',
        buttonLabel: '保存',
        defaultPath: join(remote.app.getPath("desktop"), "/WeeklyReport.md"),
        filters: [{ name: 'markdown', extensions: ['md'] }]
    }).then(({ canceled, filePath }) => {
        !canceled && fs.writeFileSync(filePath, conetnt)
        closeLoading()
    })
}
export function editProject(src) {
    //todo
}
export function deleteProject(src) {
    //todo
}
export function runScript(src, script) {
    const command = `start /i/high npm run ${script}`;
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
