import { isArray, isMap, isObject, isSet, isString } from "./checker"


type arrayOrObjecType = Array<any> | Record<string | number | symbol, any>


export function size(value: any) {
    if (isMap(value) || isSet(value)) {
        return value.size()
    } else if (isString(value) || isArray(value)) {
        return value.length
    } else if (isObject(value)) {
        return Object.keys(value).length
    } else {
        return 0
    }
}

export function forEach(value: arrayOrObjecType, callback: (item: any, index?: any) => void) {
    for (const key in value) {
        callback(value[key], key)
    }
}

export function forEachExcludeEmpty<T>(value: T[] | Record<string | number | symbol, T>, callback: (item: T, index?: string | number | symbol) => void) {
    for (const key in value) {
        const item = value[key]
        if (item) {
            callback(item, key)
        }
    }
}

export function lastIndex(value: arrayOrObjecType) {
    const values = isArray(value) ? value : Object.keys(value)
    const length = values.length - 1
    return length
}

export function lastItem(value: arrayOrObjecType) {
    return value[lastIndex(value)]
}