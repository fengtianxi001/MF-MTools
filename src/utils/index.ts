const fs = require("fs");
const path = require("path");
import { traverseFolderOptionsType, fileTreeType } from "./types";
import dayjs from "dayjs";
// import "dayjs/locale/zh-cn";
// dayjs.locale("zh-cn");

export function stringToColor(string: string, caseSensitive?: boolean): string {
  string = caseSensitive ? string : string.toLowerCase()
  let hash = 1315423911;
  let index = string.length - 1;
  while (index >= 0) {
    const ch = string.charCodeAt(index);
    hash ^= ((hash << 5) + ch + (hash >> 2));
    index--
  }
  return "#" + (hash & 0x7FFFFFFF).toString(16).slice(0, 6);
}

export function numberToPx(number:number):string{
  return number + "px"
}

export function isFile(src: string) {
  return fs.statSync(src).isFile()
}

export function isFileExist(src: string): boolean {
  return fs.existsSync(src)
}

export function mkdirsSync(dirname) {
  if (fs.existsSync(dirname)) return true;
  if (mkdirsSync(path.dirname(dirname))) {
    fs.mkdirSync(dirname);
    return true;
  }
}

export function formatDay(timeStamp: number, format?: string) {
  format = format || "YYYY-MM-DD HH:mm:ss";
  return dayjs(timeStamp).format(format);
}

export function getStringBytes(str: string): number {
  return Array.from(str).reduce(
    (sum, char) => (char.charCodeAt(0) > 255 ? (sum += 2) : ++sum),
    0
  );
}

export function readFileSync(src: string): string {
  return fs.readFileSync(src).toString();
}

export function createProjectPacker(files: Array<File>) {
  return files.map((file) => {
    return {
      id: new Date().getTime(),
      name: file.name,
      path: file.path,
      lastModified: file.lastModified,
      description: "该项目暂无简介",
      topics: getProjectTopics(file.path),
      languages: [],
      folderTree: [],
      isGit: false,
      createTime: new Date().getTime(),
    };
  });
}

export function getProjectTopics(src: string) {
  const jsonName = "package.json";
  if (path.basename(src) !== jsonName) {
    src = path.join(src, jsonName);
  }
  if (!fs.existsSync(src)) return [];
  const { dependencies } = JSON.parse(fs.readFileSync(src, "utf-8"));
  const arr = Object.keys({ ...dependencies });
  return arr;
}

export function traverseFolder(src: string, options: traverseFolderOptionsType = {
  ignore: [],
  deep: false,
  isFlat: false
}): Array<fileTreeType> {
  const result = [];
  const dirs = fs.readdirSync(src);
  const packItem = (path, label, isLeaf, children) => ({
    path,
    label,
    isLeaf,
    children,
  });
  for (const item of dirs) {
    const completeURL = path.resolve(src, item);
    if (isFile(completeURL)) {
      result.push(packItem(completeURL, item, true, []));
      continue;
    }
    if (!options.deep) continue;
    if (options.ignore && options.ignore.includes(item.toLocaleLowerCase()))
      continue;
    if (options.isFlat) {
      // result = [...result, ...traverseFolder(completeURL, options)];
      result.push(packItem(completeURL, item, false, []));
      traverseFolder(completeURL, options);
    } else {
      result.push({
        path: completeURL,
        label: item,
        isLeaf: false,
        children: traverseFolder(completeURL, options),
      });
    }
  }
  return result;
}

export function getProjectLanguages(src) {
  const IGNORE = [
    "",
    "development",
    "production",
    "staging",
    "svg",
    "jpg",
    "png",
    "ico",
  ];
  const files = traverseFolder(src, { deep: true, ignore: ["node_modules", ".git"], isFlat: true })
  const category = Object.create(null)
  let total = 0
  files.forEach(file => {
    const ext = path.parse(file.path).ext.replace(".", "")
    if (!IGNORE.includes(ext.toLocaleLowerCase())) {
      if (!category[ext]) category[ext] = 0
      category[ext]++;
      total++
    }
  })
  const languagesTops = Object.keys(category).map(key => ({
    value: (category[key] / total) * 100,
    key: key
  })).sort((a, b) => b.value - a.value)
  return languagesTops
}

export function getProjectScripts(src: string) {
  const jsonName = "package.json";
  if (path.basename(src) !== jsonName) {
    src = path.join(src, jsonName);
  }
  if (!fs.existsSync(src)) return [];
  const { scripts } = JSON.parse(fs.readFileSync(src, "utf-8"));
  const arr = Object.keys({ ...scripts });
  return arr;
}

export function getPrevDir(src: string): string {
  return path.parse(src).dir
}
