import { isPath } from "./checker";
import { ElMessage } from "element-plus";
const path = require("path")
const fs = require("fs")

export function deepLoopMkdirSync(src: string): boolean {
    if (!isPath(src)) {
        ElMessage.error("The path is invalid")
        return false
    }
    if (fs.existsSync(src)) return true;
    if (deepLoopMkdirSync(path.dirname(src))) {
        fs.mkdirSync(src);
        return true;
    }
}

export function readFile(src: string): string {
    if (!isPath(src)) {
        ElMessage.error("The path is invalid")
        return ""
    }
    return fs.readFileSync(src, "utf-8").toString();
}

export function writeFile(src: string, content: string): boolean {
    if (!isPath(src)) {
        ElMessage.error("The path is invalid")
        return false
    }
    return fs.writeFileSync(src, content)
}