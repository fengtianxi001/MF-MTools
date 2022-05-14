
import { processOptionsType } from "./types";
import { screenLoading } from "utils/index"
import { isNumber, isFunction } from "lodash-es";
const process = require('child_process')
export function exec(configs: processOptionsType) {
    const {
        command,
        options,
        onData,
        onError,
        onClose,
        needLoading,
        autoCloseLoading
    } = configs
    let loadingClose
    if (needLoading !== false) {
        loadingClose = isNumber(autoCloseLoading) ? screenLoading(autoCloseLoading) : screenLoading()
    }
    const promise = new Promise((resolve, reject) => {
        const ls = process.exec(command, options)
        let result = ""
        ls.stdout.on('data', (data) => {
            result += data
            isFunction(onData) && onData(data, resolve, reject)
        });
        ls.on('close', (data) => {
            isFunction(loadingClose) && loadingClose()
            resolve(result)
            isFunction(onClose) && onClose(data)
            ls.kill()
        })
        ls.on('error', (error) => {
            console.log(error)
            isFunction(loadingClose) && loadingClose()
            isFunction(onError) && onError(error)
            reject()
            ls.kill()
        })
    })
    return promise
}

export function spawn(configs: processOptionsType) {
    const {
        command,
        options,
        onData,
        onError,
        onClose,
        needLoading,
        autoCloseLoading,
        args
    } = configs
    let loadingClose
    if (needLoading !== false) {
        loadingClose = isNumber(autoCloseLoading) ? screenLoading(autoCloseLoading) : screenLoading()
    }
    const promise = new Promise((resolve, reject) => {
        const ls = process.spawn(command, args, options)
        let result = ""
        ls.stdout.on('data', (data) => {
            result += data
            isFunction(onData) && onData(data, resolve, reject)
        });
        ls.on('close', (data) => {
            isFunction(loadingClose) && loadingClose()
            resolve(result)
            isFunction(onClose) && onClose(data)
            ls.kill()
            console.log(ls.killed)
        })
        ls.on('error', (error) => {
            console.log(error)
            isFunction(loadingClose) && loadingClose()
            isFunction(onError) && onError(error)
            reject()
            ls.kill()
        })
    })
    return promise
}
