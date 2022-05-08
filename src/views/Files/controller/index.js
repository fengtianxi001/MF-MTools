/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 11:09:05
 */
import { filesPackage } from "@/controllers/packaging";
import { remove, open, folder, copy } from "@/controllers/fs";
import store from "@/store/index"
import { confirm } from "@/utils/message";
// import { MessageBox as $confirm } from 'element-ui';


//添加文件
export function addFiles(files) {
    for (let file of files) {
        const _package = filesPackage(file.path)
        const { path, opath } = _package
        store.commit("addFiles", _package)
        copy(opath, path)
    }
}

//删除文件
export async function deleteFile({ path, id }) {
    const result = await confirm("此操作将永久删除该文件")
    if (!result) return false
    store.commit("removeFile", id)
    remove(path)
}

//打开文件
export const openFile = open

//打开文件夹
export const openFolder = folder