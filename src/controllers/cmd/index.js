/*
 * @Description: 命令行交互
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 19:55:36
 * @LastEditTime: 2021-12-30 22:30:06
 */

import { taskQueue } from "@/cable/tasks"
const process = require('child_process')


export const spawn = (command, options = [], ondata, onclose, onerror) => {
    const promise = new Promise((resolve, reject) => {
        const ls = process.spawn(command, options)
        ls.stdout.on('data', (data) => {
            ondata && ondata(data, resolve, reject)
        });
        ls.on('close', () => {
            onclose && onclose(resolve, reject)
            resolve()
        })
        ls.on('error', () => {
            onerror && onerror()
            reject()
        })
    })
    return taskQueue(promise)
}

export const exec = (command, options = {}, ondata, onclose, onerror) => {
    const promise = new Promise((resolve, reject) => {
        const ls = process.exec(command, options)
        ls.stdout.on('data', (data) => {
            ondata && ondata(data, resolve, reject)
        });
        ls.on('close', () => {
            onclose && onclose(resolve, reject)
            resolve()
        })
        ls.on('error', () => {
            onerror && onerror()
            reject()
        })
    })
    return taskQueue(promise)
}
