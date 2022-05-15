import { forEachExcludeEmpty, lastItem } from "./esApi";
import { isGited } from "./checker";
import { dayDifference, dayFomart, isDayInRange } from "./day";
import { Markdown } from "./markdown";
import { ElMessage } from "element-plus";
import { readFile } from "./fileSystem";
const path = require("path");
const { spawnSync } = require("child_process");


type gitLogType = {
    message: string,
    date: string,
    author: string,
    timeuse: string
}

export function gitLog(src: string, range: 'day' | 'week' | 'month' | "year" = "year") {
    const SEPARATOR = "-.-.-.-"
    const output = spawnSync('git', ["log", "--reverse", "--date=format:%Y-%m-%d %H:%M:%S", `--pretty=format:["%s","%ad","%aN"]${SEPARATOR}`], { cwd: src })
    const cache = output.stdout.toString().split(SEPARATOR)
    const logs = {}
    forEachExcludeEmpty(cache, (item: string) => {
        const [message, date, author] = JSON.parse(item)
        if (!isDayInRange(date, range)) return void 0;
        const logKey = dayFomart(date, "YYYY-MM-DD")
        const group = logs[logKey] ? logs[logKey] : (logs[logKey] = [])
        const previousDate = lastItem(group)?.date
        const timeuse = !previousDate ? "(unknow)" : `(${(dayDifference(date, previousDate) / (1000 * 60 * 60)).toFixed(2)}) h`
        group.push({
            message,
            date,
            author,
            timeuse
        } as gitLogType)
    })
    return logs
}

export function gitLog2Markdown(content: Record<string, Array<gitLogType>>, title?: string) {
    const md = new Markdown(title)
    forEachExcludeEmpty(content, (list, key) => {
        md.h2(key)
        forEachExcludeEmpty(list, ({ message, author, timeuse, date }) => {
            const option = `${dayFomart(date, "HH:mm")}, ${message}, ${author}, ${timeuse}`
            md.option(option)
        })
    })
    return md.content
}

export function gitConfig(value: string) {
    if (!isGited(value)) {
        ElMessage.error("该项目未被git托管")
        return ""
    }
    const srcCache = path.parse(value)["base"] === ".git" ? value : path.join(value, ".git");
    const src = path.join(srcCache, "config")
    return readFile(src)
}