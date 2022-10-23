import { isEmpty } from "medash"
import { errorNotification } from "@/utils/notification.js"

export default (data,title) => {
    if (isEmpty(data.name)) {
        errorNotification({title, content:'请输入账号名'})
        return false
    }
    if (isEmpty(data.password)) {
        errorNotification({title,content:'请输入密码'})
        return false
    }

    if (!data.isRead) {
        errorNotification({title, content:'请阅读并同意xx隐私协议'})
        return false
    }
    return true
}