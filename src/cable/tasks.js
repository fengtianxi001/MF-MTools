/*
 * @Description: node操作的任务队列
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 11:09:05
 */

import { Message as $message } from 'element-ui';

class Tasks {
    constructor() {
        this.tasking = new Map()
        this.callbacks = []
    }
    notify() {
        this.callbacks.map(callback => {
            if (typeof callback === 'function') {
                callback(this.tasking)
            }
        })
    }
    beginTask(id) {
        this.tasking.set(id)
        this.notify()
    }
    closeTask(id) {
        this.tasking.delete(id)
        this.notify()
    }
    on(callback) {
        this.callbacks.push(callback)
    }
}

export const task = new Tasks()

export const taskQueue = (callback) => {
    const taskId = new Date().getTime()
    task.beginTask(taskId)
    return new Promise((resolve, reject) => {
        callback.then(res => {
            task.closeTask(taskId)
            resolve(res)
        }).catch(error => {
            task.closeTask(taskId)
            $message.error(error)
            reject(error)
        })
    })
}