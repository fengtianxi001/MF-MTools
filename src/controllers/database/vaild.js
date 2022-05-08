/*
 * @Description: 数据校验
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-31 00:35:27
 * @LastEditTime: 2021-12-31 01:46:10
 */

const fs = require("fs")
const path = require("path")
import { projectsfolder, filesfolder } from "@/utils/config";
import { different } from "@/utils/index"
import { projectPackage, filesPackage } from "@/controllers/packaging";

export function projectVaild(store) {
    const oldV = store.projects.map(item => item.path)
    const newV = fs.readdirSync(projectsfolder).map(item => path.resolve(projectsfolder, item))
    const { increase, decrease } = different(oldV, newV)
    decrease.map(item => {
        const index = store.projects.findIndex(cur => cur.path === item)
        store.projects.splice(index, 1)
    })

    increase.map(item => {
        const packet = projectPackage(item, false)
        store.projects.unshift(packet)
    })
    return store
}

export function fileVaild(store) {
    const oldV = store.files.map(item => item.path)
    const newV = fs.readdirSync(filesfolder).map(item => path.resolve(filesfolder, item))
    const { increase, decrease } = different(oldV, newV)
    decrease.map(item => {
        const index = store.files.findIndex(cur => cur.path === item)
        store.files.splice(index, 1)
    })

    increase.map(item => {
        const packet = filesPackage(item, false)
        store.files.unshift(packet)
    })
    return store
}