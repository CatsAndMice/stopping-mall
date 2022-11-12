import { getBanner } from "@/http/queryListBanner"
import { shallowRef } from "vue"
export default (num) => {
    const list = shallowRef([])
    const getImage = (data = []) => {
        return data.map(d => {
            const { img } = d
            return img
        })
    }
    const getBannerList = async () => {
        const { data } = await getBanner(num)
        list.value = getImage(data)
    }
    return {
        list,
        getBannerList
    }
}