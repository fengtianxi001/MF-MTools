const fs = require("fs");
const path = require("path")

function getTag(value: any): string {
  return value == null
    ? value === undefined
      ? "[object Undefined]"
      : "[object Null]"
    : toString.call(value);
}

export function isMap(value: unknown): boolean {
  return value instanceof Map
}

export function isSet(value: unknown): boolean {
  return value instanceof Set
}

export function isFunction(value: unknown): boolean {
  return typeof value === "function";
}

export function isArray(value: unknown): boolean {
  return Array.isArray(value);
}

export function isObject(value: unknown): boolean {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
}

export function isString(value: unknown): boolean {
  const type = typeof value;
  return (
    type === "string" ||
    (type === "object" &&
      value != null &&
      !Array.isArray(value) &&
      getTag(value) == "[object String]")
  );
}

export function isPath(value: string): boolean {
  return new RegExp("^[A-z]:\\\\(.+?\\\\)*$").test(value);
}

export function isFile(value: string): boolean {
  if (!isPath(value)) return false;
  return fs.statSync(value).isFile();
}

export function isFolder(value: string): boolean {
  if (!isPath(value)) return false;
  return fs.statSync(value).isDirectory();
}

export function isResourceExist(value: string): boolean {
  if (!isPath(value)) return false;
  return fs.existsSync(value);
}

export function isResourceNameVaild(value: string) {
  const isExit = fs.existsSync(value);
  if (!isExit) return value;
  const parse = path.parse(value);
  const sequence = parse.name.match(/(?<=\()[0-9](?=\)$)/);
  if (sequence) {
    const name = parse.name.slice(0, sequence.index - 1);
    parse.name = `${name}(${Number(sequence[0]) + 1})`;
  } else {
    parse.name = parse.name + "(1)";
  }
  return isResourceNameVaild(`${parse.dir}\\${parse.name}${parse.ext}`);
}

export function isGited(value: string): boolean {
  if (!isPath(value)) return false;
  const src =
    path.parse(value)["base"] === ".git" ? value : path.join(value, ".git");
  return isResourceExist(src);
}

