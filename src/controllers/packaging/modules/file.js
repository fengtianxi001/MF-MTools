/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 21:22:29
 * @LastEditTime: 2021-12-31 02:37:31
 */
const { basename, resolve, extname } = require('path')
const { baseURL } = require("@/utils/config")
const { vaildPath } = require("@/utils/index")
import { v4 as uuidv4 } from 'uuid';
import { pinyin } from 'pinyin-pro';


export function packaging(src, vaild = false) {
    const targetPath = resolve(baseURL, "files", basename(src))
    const name = basename(src).split(".")[0]
    return {
        id: uuidv4(),
        name,
        extname: extname(src).replace(".", ""),
        pinyin: pinyin(name, { toneType: 'none' }).replace(/\s*/g, ""),
        addtime: new Date().getTime(),
        opath: src,
        path: vaild ? vaildPath(targetPath) : targetPath
    }
}