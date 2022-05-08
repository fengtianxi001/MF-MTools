//  时间格式过滤器
import moment from "moment";
moment.locale('zh-cn')

export default {
    time_format: (value) => {
        return moment(value).format('YYYY/MM/DD HH:mm:ss')
    },
    date_format: (value) => {
        return moment(value).format('YYYY/MM/DD')
    }
}
