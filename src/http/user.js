import axios from "axios"
import { url, getData } from "./baseUrl"
import { errorNotification } from "@/utils/notification.js"
export const login = async (params) => {
    const { password, name } = params
    const data = await axios.post(url + '/api/login', {
        no: name,
        pwd: password
    })
    const result = getData(data)
    if (result.code === 0) {
        return result.data
    }
    errorNotification({ title: '登陆失败', content: result.data })
    return
}

export const register = async (params) => {
    const { password, name } = params
    const data = await axios.post(url + '/api/register', {
        no: name,
        pwd: password
    })

    if (getData(data).code === 0) {
        return true
    }
    errorNotification({
        title: '登陆失败',
        content: getData(data).data
    })
    return false


}