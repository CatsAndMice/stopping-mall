import axios from "axios"
import { url, getData } from "./baseUrl"
export const typeListImages = async (type) => {
    const result = await axios.get(url + `/api/queryListByType?type=${type}`)
    return getData(result)
}

export const getListByName = async (params) => {
    const result = await axios.post(url + `/api/queryListByName`, params)
    return getData(result)
}