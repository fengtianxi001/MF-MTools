/*
 * @Description: 配置中心
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 19:55:36
 * @LastEditTime: 2021-12-31 00:27:12
 */

const { existsSync } = require("fs")
const { resolve } = require("path")

export const platform = _fetchPlatform()
export const baseURL = _fetchBaseURL()
export const datafolder = resolve(baseURL, './data')
export const datasheet = resolve(baseURL, './data/database.json')
export const projectsfolder = resolve(baseURL, './projects')
export const filesfolder = resolve(baseURL, './files')



function _fetchPlatform() {
    const platform = {
        "darwin": "mac",
        "win32": "windows",
        "linux": "linux"
    }
    return platform[process.platform] || "windows"

}

function _fetchBaseURL() {
    return existsSync("d://")
        ? resolve("d://", './mtools_cache')
        : resolve('c://', './mtools_cache')
}
