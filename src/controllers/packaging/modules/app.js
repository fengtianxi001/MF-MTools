const { basename, extname } = require('path')
import { v4 as uuidv4 } from 'uuid';
import { pinyin } from 'pinyin-pro';
import { target, create } from "@/controllers/icon"

export function packaging(src) {
    return new Promise((resolve) => {
        const name = basename(src).split(".")[0]
        const result = {
            id: uuidv4(),
            name,
            extname: extname(src).replace(".", ""),
            pinyin: pinyin(name, { toneType: 'none' }).replace(/\s*/g, ""),
            addtime: new Date().getTime(),
            target: target(src)
        }
        create(result.target).then(ico => {
            result.ico = ico
            resolve(result)
        })
    })

}