/*
 * @Description: 系统文件操作api
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 15:06:54
 */

const fs = require('fs-extra')
const { dirname, extname } = require("path")
const { shell } = require('electron')
const { clipboard } = require("electron");
import { taskQueue } from "@/cable/tasks"
import { exec } from "@/controllers/cmd"

//文件及文件夹复制
export function copy(src, dest) {
    return taskQueue(fs.copy(src, dest))
}

//文件及文件夹剪切
export function move(src, dest) {
    return taskQueue(fs.move(src, dest))

}

//文件删除
export function remove(src) {
    return taskQueue(fs.remove(src))
}

//打开文件
export function open(src) {
    console.log("src", src);
    return taskQueue(shell.openPath(src))
}

//打开文件夹
export function folder(src) {
    const path = extname(src) ? dirname(src) : src
    return exec(`explorer "${path}"`)
}

//编辑器打开 
export function code(src) {
    return exec(`code "${src}"`)
}

//复制文本
export function copyText(text) {
    return clipboard.writeText(text)
}