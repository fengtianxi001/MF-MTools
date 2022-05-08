/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 21:08:43
 * @LastEditTime: 2021-12-31 02:37:05
 */
const { basename, resolve } = require('path')
const { baseURL } = require("@/utils/config")
const { existsSync, readFileSync } = require("fs")
const { vaildPath } = require("@/utils/index")
import { v4 as uuidv4 } from 'uuid';
import { pinyin } from 'pinyin-pro';


export function packaging(src, vaild = false) {
    const targetPath = resolve(baseURL, "projects", basename(src))
    const name = basename(src)
    return {
        id: uuidv4(),
        name,
        pinyin: pinyin(name, { toneType: 'none' }).replace(/\s*/g, ""),
        addtime: new Date().getTime(),
        remote: fetchRemote(src),
        scripts: fetchScripts(src),
        opath: src,
        path: vaild ? vaildPath(targetPath) : targetPath
    }
}
export function updatePackaging(src) {
    return {
        remote: fetchRemote(src),
        scripts: fetchScripts(src)
    }
}

function fetchRemote(src) {
    const gitPath = resolve(src, '.git')
    const svnPath = resolve(src, '.svn')
    return existsSync(gitPath) ? "git" : (existsSync(svnPath) ? "svn" : "local")
}

function fetchScripts(src) {
    src = resolve(src, './package.json')
    if (!existsSync(src)) return []
    const options = { encoding: 'utf-8' }
    const file = readFileSync(src, options)
    const scripts = JSON.parse(file).scripts || {}
    return Object.keys(scripts).reduce((prev, cur) => {
        prev.push(cur)
        return prev
    }, [])
}

