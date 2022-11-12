import axios from "axios"
import { url, getData } from "./baseUrl"
export const login = async (params) => {
    const { password, name } = params
    const data = await axios.post(url + '/api/login', {
        no: name,
        pwd: password
    })
    const result = getData(data)
    return result.code === 0 ? result.data : null
}

export const register = async (params) => {
    const { password, name } = params
    const data = await axios.post(url + '/api/register', {
        no: name,
        pwd: password
    })

    return getData(data).code === 0
}