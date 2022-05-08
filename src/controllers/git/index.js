/*
 * @Description: git的基本操作
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 18:03:28
 */

import { exec } from "@/controllers/cmd";

//git提交
export function commit(cwd) {
    const command = `TortoiseGitProc /command:commit /path:${cwd} /logmsg:update`
    const options = { cwd, detached: true }
    return exec(command, options)
}

//git推送
export function push(cwd) {
    const command = `TortoiseGitProc /command:push /path:${cwd}`
    const options = { cwd, detached: true }
    return exec(command, options)
}

//git拉取
export function pull(cwd) {
    const command = `TortoiseGitProc /command:pull /path:${cwd}`
    const options = { cwd, detached: true }
    return exec(command, options)
}

//获取项目最近100条的提交记录
export function log(cwd) {
    const arr = []
    const ondata = (data) => {
        const cache = data.split("\n")
        cache.map(cur => {
            if (cur == "") return false
            const [time, author] = cur.split(",")
            arr.push([new Date(time).getTime(), author])
        })
    }
    const onclose = (resolve) => {
        const cache = arr.sort((a, b) => b[0] - a[0])
        resolve(cache)
    }
    const command = "git log --pretty=format:%cd,%cn"
    const options = { cwd }
    return exec(command, options, ondata, onclose)
}