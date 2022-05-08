/*
 * @Description: 数据中心
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 19:55:36
 * @LastEditTime: 2021-12-31 02:33:48
 */

const fs = require('fs')
import { datafolder, datasheet } from "@/utils/config";
import { projectVaild, fileVaild } from "./vaild";
// const { initWater } = require("../watcher/index")
import { initWater } from "@/controllers/watcher";
class Database {
    constructor() {
        this.initialize()
        initWater()
    }
    initialize() {
        const defaults = {
            projects: [],
            files: [],
            apps: [],
            webs: []
        }
        !fs.existsSync(datafolder) && fs.mkdirSync(datafolder)
        !fs.existsSync(datasheet) && fs.writeFileSync(datasheet, stringify(defaults))
    }
    update(data) {
        fs.writeFileSync(datasheet, stringify(data, "", 2))
    }
    fetch() {
        const encoding = { encoding: 'utf-8' }
        let store = parse(fs.readFileSync(datasheet, encoding))
        store = projectVaild(store)
        return fileVaild(store)
    }
}

function stringify(content) {
    return JSON.stringify(content)
}

function parse(content) {
    return JSON.parse(content)
}

export default Database