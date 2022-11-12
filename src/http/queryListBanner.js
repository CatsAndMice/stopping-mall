import axios from "axios"
import { url, getData } from "./baseUrl"
export const getBanner = async (num = 5) => {
    const result = await axios.get(url + `/api/queryListBanner?num=${num}`)
    return getData(result)
}
