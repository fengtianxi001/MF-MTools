const fs = require("fs");
const path = require("path");
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

export function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) return true;
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}

export function formatDay(timeStamp: number, format?: string) {
  format = format || 'YYYY-MM-DD HH:mm:ss'
  return dayjs(timeStamp).format(format)
}

export function getStringBytes(str: string): number {
  return Array.from(str).reduce((sum, char) => char.charCodeAt(0) > 255 ? sum += 2 : ++sum, 0)
}

export function readFileSync(src): string {
  return fs.readFileSync(src).toString()
}