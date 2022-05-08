/*
 * @Description: 
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 11:09:05
 * @LastEditors: Seven
 * @LastEditTime: 2021-12-30 16:18:18
 */

import { appsPackage } from "@/controllers/packaging";
import { open } from "@/controllers/fs";
import store from "@/store/index"
import { MessageBox as $confirm } from 'element-ui';

//添加app
export function addApps(apps) {
    for (let app of apps) {
        appsPackage(app.path).then(res => {
            store.commit("addApps", res)
        })

    }
}

//删除app
export function deleteApp(id) {
    return new Promise((resolve, reject) => {
        $confirm("此操作将永久删除该文件, 是否继续?", "提示", {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
        })
            .then(() => {
                store.commit("removeApp", id)
            })
            .catch((error) => {
                reject(error)
            });
    })
}

//打开文件
export const openApp = open

