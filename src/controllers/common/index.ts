import { isFunction } from "lodash-es";
import { processOptionsType } from "./types";
import { screenLoading } from "utils/index"
const process = require('child_process')

export function exec(configs: processOptionsType) {
    const loadingClose = screenLoading()
    const {
        command,
        options,
        onData,
        onError,
        onClose
    } = configs
    const promise = new Promise((resolve, reject) => {
        const ls = process.exec(command, options)
        ls.stdout.on('data', (data) => isFunction(onData) && onData(data, resolve, reject));
        ls.on('close', (data) => {
            loadingClose()
            resolve(data)
            isFunction(onClose) && onClose(data)
        })
        ls.on('error', (error) => {
            console.log(error)
            loadingClose()
            isFunction(onError) && onError(error)
            reject()
        })
    })
    return promise
}