import request from "@/utils/request";

//登录
export const login = data => {
    return request({
        url: "/login",
        method: "post",
        data
    });
};

//获取用户信息
export const getUser = id => {
    return request({
        url: "/user",
        method: "get",
        params: {
            id
        }
    });
};