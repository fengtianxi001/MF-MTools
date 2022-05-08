// 通过资源路径 生成对用模块的包信息

import {
    packaging as project_packaging,
    updatePackaging as project_update_packaging
} from "./modules/project"

import {
    packaging as file_packaging,
} from "./modules/file"

import {
    packaging as app_packaging,
} from "./modules/app"


//新项目打包
export const projectPackage = project_packaging

//项目更新打包
export const projectUpdatePackage = project_update_packaging

//新文件信息打包
export const filesPackage = file_packaging

//新应用信息打包
export const appsPackage = app_packaging

