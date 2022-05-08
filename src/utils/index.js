/*
 * @Description: 常用的工具类
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 11:09:05
 */

const fs = require('fs')
const path = require('path')
const stc = require('string-to-color');

export const stringColor = stc

export function vaildPath(src, count = 0) {
    let _src = src
    if (count !== 0) {
        //不是第一次进入
        const dirname = path.dirname(src)
        const [basename] = path.basename(src).split(".")
        const extname = path.extname(src)
        _src = path.resolve(dirname, basename + count + extname)
    }
    const _exists = fs.existsSync(_src)
    return _exists ? vaildPath(src, count + 1) : _src
}

//便利路径创建文件夹
// export function mkdir(_path) {
//     if (fs.existsSync(_path)) {
//         return true
//     } else {
//         if (mkdir(path.dirname(_path))) {
//             fs.mkdirSync(_path)
//             return true
//         }
//     }
// }

//different算法
export function different(oldV, newV) {
    const increase = []
    const decrease = []
    oldV.map(dict => {
        if (newV.includes(dict)) return false
        decrease.push(dict)
    })
    newV.map(folder => {
        if (oldV.includes(folder)) return false
        increase.push(folder)
    })
    return {
        increase,
        decrease
    }
}

//类型检测
