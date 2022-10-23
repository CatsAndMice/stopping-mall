import { Notification } from "@arco-design/web-vue"

export const errorNotification = ({title, content}) => {
    Notification.error({
        title,
        content,
        closable:true
    })
}

export const successNotification = ({title, content}) => {
    Notification.success({
        title,
        content,
        closable:true
    })
}