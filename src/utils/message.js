/*
 * @Description: 确认框，弹窗，通知等api
 * @Autor: 肛肠科冯主任
 * @Date: 2021-12-30 16:40:10
 */


import { MessageBox, Message, Notification } from 'element-ui';

export function confirm(message = "", title = "提醒") {
    const options = {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
    }
    return new Promise(resolve => {
        MessageBox(message, title, options)
            .then(() => resolve(true))
            .catch(() => resolve(false));
    })
}

export function alert(params) {
    Message(params)
}

export function notify(message = "", type = "success", title = "提醒",) {
    const _enum = {
        success: "el-icon-success",
        error: "el-icon-error",
        info: "el-icon-info"
    }
    Notification.success({
        title,
        message,
        showClose: false,
        iconClass: _enum[type] || "el-icon-info"
    });
}

