import axios from "axios"
import { url, getData } from "./baseUrl"
export const typeList = async () => {
    const result = await axios.get(url + '/api/queryTypeList?num=5')
    return getData(result)
}
